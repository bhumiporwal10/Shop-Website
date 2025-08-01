function getobject(){
const customer={fname:'Rain',Iname:'Water',age:'25',address:'India',zipcode:'008976'}
document.getElementById('result').innerHTML='<h1>'+customer.age +' '+customer.fname+' '+customer.zipcode+'</h1>'
}

function newObject(memberage){
	const customer = new Object();

	customer.fname ='taehyung';
    customer.lname ='kim';
    customer.age = '28';
    

    if(customer.age == memberage){
    	document.getElementById('result').innerHTML=customer.fname;
    }
    else{
    	document.getElementById('result').innerHTML= 'error';
    }
}

function Test(){
	document.getElementById('result').innerHTML='hello';
}

function yahoo(val){
	if (val.length>=10) {
		document.getElementById('result').innerHTML="invalid!";
	}else{
		document.getElementById('result').innerHTML=val.length;
	}
}
   
   function studentfun(){
var sname=document.getElementById('student_name').value;
var roll_no=document.getElementById('roll_no').value;
var branch = document.getElementById('college_name').value;

   }