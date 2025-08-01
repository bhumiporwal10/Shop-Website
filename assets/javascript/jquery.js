
//hide function

$(document).ready(function(){
	$('#button').click(function(){
		$('#description').hide();
	});
});

//input function

$(document).ready(function(){
	$('#hide').click(function(){
		$('#description').hide(2000);
	});



	$('#show').click(function(){
		$('#description').show(2000);
		$('.image').show(2000);
	});



	$('#toggle').click(function(){
		$('#description').toggle(2000);
	});




	$('#callback').click(function(){
		$('#description').hide(5000,function(){
			alert('Thankyou! your task is completed :)');

		});

	})

});