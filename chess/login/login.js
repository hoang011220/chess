$(document).ready(function(){
	$('#username').change(function(){
		var username = $(this).val().trim();
		alert(`username = ${JSON.stringify(username)}`)
	});
	$('#password').change(function(){
		var password = $(this).val().trim();
		
		alert(`password = ${JSON.stringify(password)}`)
	});
});
