 function validateEmail() { 
    	
    	var name = $('#name-text').val().trim();
    	var email = $('#email-text').val().trim();
    	var message = $('#mess-text').val().trim();
        
    	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	
    	if(name === "") {// /^[a-zA-Z]+$/ 
    	  //(!/^[a-zA-Z/n]*$/g.test(name)) || 	
           alert("please enter name");
           return false; 
        } else {
        	
        	name = name.trim();
        	
        	if(name.length > 100) {
        		
        		alert("please enter valid name");
                return false;
        	}
        	
        	var fname = name.split(" ");
        	
        	if(fname.length > 4) {
        		
        		alert("please enter valid name");
                return false;
        	} 
        	
        	for(var i = 0; i < fname.length; i++) {
        		
        		if((!/^[a-zA-Z/n]*$/g.test(fname[i].trim()))) {
        			
        			alert("please enter valid name");
                    return false;
        		}
        	}
        }
        
		if(!re.test(email)) {
    		
    		alert("Invalid Email Id");
    		return false;
    	}
    	
    	if(message.length > 1000 || message.length === 0) {
    		
    		alert("message should be maximum 1000 letters and maximum 1 letter");
            return false;
        }
    	
    	return true;
    }
    
	function sendEmail() {
		
		var name = $('#name-text').val().trim();
    	var email = $('#email-text').val().trim();
    	var message = $('#mess-text').val().trim();
    	
		var url = "https://complete-sector-219315.appspot.com/hello";
		var method = 'POST';
		var request;
		
		if(!validateEmail())
			return;
		
		//Creating request object
		if(window.XMLHttpRequest){
			request = new XMLHttpRequest();
		}else{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		request.open(method, url, true);  // Async = true.
		
		request.onload = function() {
			
				var status = request.status;
				var responseData = request.responseText.trim();
				console.log(responseData)		
				
				if(responseData === "200" && status === 200){
					// window.location.assign(responseData[2]);
					alert("Message Sent Succesfully")
				} else {
					
					alert("Please Try again Later !");
				}
		};

		//request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		//request.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml,text/plain;q=0.9,;q=0.8");
		request.setRequestHeader("Cache-Control", "no-cache");

		// Actually sends the request to the server for login
		request.send(name + "#&" + email + "#&" + message);
	}
	
	function ajaxCall() {
		
		var name = $('#name-text').val().trim();
    	var email = $('#email-text').val().trim();
    	var message = $('#mess-text').val().trim();
    	
		var url = "https://complete-sector-219315.appspot.com/hello";
		var method = 'POST';
		var request;
		
		if(!validateEmail())
			return;
		
		// Creating request object
		if (window.XMLHttpRequest) {
			
			request = new XMLHttpRequest();
		} else {
			
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		try {
			
			request.onreadystatechange = function() {
				// console.log(request);
				if (request.readyState == 4 && request.status == 0) {
					
					alert("Unknown Error Occured. Server response not received.");
				}
			};
			
			request.open(method, url, true); // Async = true.

			request.onload = function() {

				var status = request.status;
				
				if (status === 200) {
					
					var data = request.responseText;
					
					if(data === "200") {
						// window.location.assign(responseData[2]);
						alert("Message Sent Succesfully")
					} else {
						
						alert("Please try again later !")
					} 
					
				} else {
					
					alert(status + " " + request.responseText);
				}
			};

			request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
			request.setRequestHeader("Cache-Control", "no-cache");
			
			// Actually sends the request to the server for login
			request.send(name + "#&" + email + "#&" + message);
			
		} catch(e) {
			
			console.log('catch', e);
		}
	}
	
/*	function ajaxCallForSendMail() {
	    // feed to parse
		var url = "https://complete-sector-219315.appspot.com/hello";
		var name = $('#name-text').val().trim();
    	var email = $('#email-text').val().trim();
    	var message = $('#mess-text').val().trim();
    	
    	if(!validateEmail())
			return;
    	
	    $.ajax({
			url: url,
			type: "POST",
			async: false,
			dataType: "text", // expected format for response
			contentType: "application/text", // send as Text
			xhrFields: {
			    withCredentials: true
			},
			data: name + "#&" + email + "#&" + message,
			
			success:function(data) {
				
				if(data.indexOf("*expired*") === 0) {
					data = data.trim().replace("*expired*","");
					window.location.assign(data);
					return;
				}
				
				if(data === "200") {
					// window.location.assign(responseData[2]);
					alert("Message Sent Succesfully")
					return;
				} 
				
				alert(data);
			},
			error: function(data) {
			    //called when there is an error
				alert("Please Try again Later !");
			}
		});    
	}*/
	