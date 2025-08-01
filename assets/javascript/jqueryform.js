

$(document).ready(function(){
$('#myform').on('submit',function(){
var sname=$('#sname').val();
var sage=$('#sage').val();
var sdob=$('#sdob').val();
var email=$('#email').val();
var branch=$('#branch').val();

if(sname==''){
$('#sname_error').text('please enter student name');
return false;
}

if(sage==''){
$('#sage_error').text('please enter student age');
return false;
}

if(sdob==''){
$('#sdob_error').text('please enter student dob');
return false;
}

if(sname==''){
$('#semail_error').text('please enter student email');
return false;
}

if(sname==''){
$('#sbanch_error').text('please enter student branch');
return false;
}

else{
$('#submit').show(5000,function(){
	$('#submit').text('your registration completed');
})
return false;
}

});
});