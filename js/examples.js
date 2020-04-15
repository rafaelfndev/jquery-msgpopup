$('body').on('click', '[data-simple-example]', function(){
	$().messagePopup({
		text: 'Test success message!',
		success: true,
	});
});
