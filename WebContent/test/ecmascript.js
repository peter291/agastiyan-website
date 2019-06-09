// Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

let a = [1,2,3,4];
let len = a.entries();

let [a1,a2] = a;

{
	let c = 10;
	var d = 20;
}

var obj = {
		name:'',
		age:'',
		setName: function(n,a) {
			this.name=n;
			this.age=a;
		},
		getName: () => {
			console.log(this.name)
		},
		getAge: () => {
			console.log(this.age)
		}
}

let b = () => {
	
	console.log(len.next().value)
};

let x = "abc";

try {
	
	if(x == "") throw "is Empty";
    if(isNaN(x)) throw "not a number";
    if(x > 10) throw "too high";
    if(x < 5) throw "too low";	
}
catch(err) {

	alert(err)
}
  
// console.log(c);
// console.log(d);

// obj.setName("kings","28");
// obj.getName();
// obj.getAge();

b();