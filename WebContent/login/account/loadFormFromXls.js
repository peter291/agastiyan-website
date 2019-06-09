/* set up XMLHttpRequest */
var url = "Book1.xlsx";
var oReq = new XMLHttpRequest();

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
        	
	var arraybuffer = oReq.response;

	/* convert data to binary string */
	var data = new Uint8Array(arraybuffer);
	var arr = new Array();
            
	for (var i = 0; i != data.length; ++i) 
		arr[i] = String.fromCharCode(data[i]);
            
	var bstr = arr.join("");

	/* Call XLSX */
	var workbook = XLSX.read(bstr, {
            	
		type: "binary"
	});
			
	console.log(workbook.SheetNames.length)
            
	/* DO SOMETHING WITH workbook HERE */
	var first_sheet_name = workbook.SheetNames[0];
	var second_sheet_name = workbook.SheetNames[1];
            
	console.log(second_sheet_name)
	/* Get worksheet */
	var worksheet = workbook.Sheets[first_sheet_name];
	var worksheet2 = workbook.Sheets[second_sheet_name];
            
	var arrayone = XLSX.utils.sheet_to_json(worksheet, {raw: true});
	var fullDetails = XLSX.utils.sheet_to_json(worksheet2, {raw: true});
	
	var keys = getKeys(arrayone);
	optimizeData(fullDetails,keys);
	// readValues(arrayone);
	
}
        
oReq.send();

function optimizeData(data,key) {
	
	var scheme = [];
	var design = "";
	
	for(let k in data[0]) {
		
		scheme.push(k);
	}
	
	key.shift();
	
	for(var i of key) {
		
		console.log(i)
		
		var kvArray = [];
				
		for(var j = 0; j < data.length; j++) {

			if(data[j]["Description"] === i) {
			
				kvArray.push(data[j]);
			}
		}
		
		var reformattedArray = kvArray.map(obj =>{ 
			
			var rObj = {};
			
			rObj[obj["Description"]] = obj["Description_1"];
			rObj[obj["Description_1"]] = obj["Type"];
			rObj[obj["Type"]] = obj["values"];
			
			return rObj;
		});
		
		console.log(reformattedArray)
		design += formGeneration(reformattedArray,i);
	}

	$('#form-gen-id').text('');
	$('#form-gen-id').append(design);
}

function formGeneration(reformattedArray,key) {
	
	var formDesign = "";
	var start = "";
	var type = "";
	var start2 = "";
	var type2 = "";		
	
	for(var i = 0; i < reformattedArray.length;i++) {
	 
		start = reformattedArray[i][key];
		
		if(type == "" || type != start) {
			
			type = reformattedArray[i][key];
			
			if(i != 0) {
				
				formDesign += "</tr>" +
								"</table>";
				type2 = "";
			}
			
			formDesign += "<table style='margin: 10px;'>" +
							
						  "<tr>" +
					
							"<td>" + type + "</td>" +
							
							"<td>" +
							 "<select>" +
							 	"<option value='yes'>Yes</option>" +
							 	"<option value='no'>No</option>" +
							 "</select>" +
							"</td>" +
							
							"<td>Width</td>" +
							"<td><input type='text' name='width'></td>" +
							"<td>Height</td>" +
							"<td><input type='text' name='width'></td>" +
							"<td>#Reference</td>" +
							"<td><input type='text' name='width'></td>" +
						  "</tr>";
		
		}
		
		start2 = reformattedArray[i][type];
		
		if(type2 == "" || type2 != start2) {
			
			if(type2 == "") {				
			
				formDesign += "<tr>";
			}
		
			type2 = reformattedArray[i][type];
			
			formDesign += "<td>" + type2 + "</td>";

			var type3 = reformattedArray[i][type2];
			
			formDesign += "<td>" +
							"<select>" + 
								"<option value='" + type3 +"'>" + type3 + "</option>" +
							"</select>" +
						  "</td>";
		}		
	} 
	
	return formDesign + "</tr>" + "</table>";
}

function removeDuplicates(data) {
	
	var things = {thing:[]}; //new Object();

	// things.thing = new Array();
	var items = [];
	
	for(var i of data) {
		
		items.push(i);
	}
	
	items = items.filter((items, index, self) =>
	
	index === self.findIndex((t) => (
			t["Foyer"] === items["Foyer"] && t["Foyer"] === items["Foyer"]
	  ))
	);

	// var myData = items;

	// items = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
	
	console.log(items)
	return data;
}

function getKeys(data) {
	
	let keyPairs = data[0];
	let keyList = [];
	
	for(let x in keyPairs) {
	
		keyList.push(x);
    }
	
	return keyList;
}

function readValues(data) {
	
	let keyPairs = data[0];
	let keyList = [];
	
	for(let x in keyPairs) {
	
		keyList.push(x);
    }
	
	keyList.shift()
	console.log(keyList)
	
	generateRequirement(keyList);
}

function generateRequirement(data) {
	
	let design = "<tr>" +
					"<th>Category</th>" +
					"<th>Requirement</th>" +
				 "</tr>";
	
	for(var key of data) {
		
		design += "<tr>" +
						"<td>" + key + "</td>" +
						"<td><input class = 'agas-cat-select' type='checkbox' name='" + key + "' value='" + key + "'></td>" +
					"</tr>";
	}
	 
	$("#agas-cat-req").append(design);
}

$(function() {
	
	$(document).on("click", ".agas-cat-select", function() {
		
		if($(this).is(':checked')) {
			
			var category = $(this).val();
			console.log(category)
		} else {
			
			if(confirm("data not saved ?")) {
				
				alert("cleared")
			} else {
				
				alert("not cleared")
				$(this).prop('checked',!$(this).prop('checked'));
			}
		}
	});
});