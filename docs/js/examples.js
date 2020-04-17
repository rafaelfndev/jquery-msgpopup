$('body').on('click', '[data-btn-click-me]', function(){
	$().msgpopup({
		text: 'Simple like that!',
	});
});

$('body').on('click', '[data-btn-header-example]', function(){
	var type = $(this).attr('data-btn-header-example');

	$().msgpopup({
		text: 'Custom color messages: '+type,
		type: type
	});
});

$('body').on('click', '[data-btn-header-custom="type"]', function(){
	$().msgpopup({
		text: 'This box uses custom type class',
		type: 'another-example',
	});
});

$('body').on('click', '[data-btn-header-custom="html"]', function(){

	var someHtmlCode = '\
	<div class="example-box">\
		<h2 class="example-title">Custom html code</h2>\
		<div class="example-content">This messages are wrapped into custom HTML and uses custom CSS.</div>\
	</div>';

	$().msgpopup({
		text: someHtmlCode,
	});
});

$('body').on('click', '[data-btn-header-custom="html-css"]', function(){

	var someHtmlCode = '\
	<div class="example-box-2">\
		<h2 class="example-title-2">\
			<span><img src="./images/check.png" alt="check" class="example-icon-2" /></span>\
			<span>Need custom HTML?</span>\
		</h2>\
		<div class="example-content-2">This messages are wrapped into custom HTML, uses custom CSS, and doesn\'t have the standard item classes. You can customize it as you want.</div>\
		<div class="example-buttons-2">\
			<button type="button" class="btn btn-info" data-btn-message="hmm">Cool...</button>\
			<button type="button" class="btn btn-error" data-msgpopup-close>Close</button>\
			<button type="button" class="btn btn-success" data-btn-message="ok">Ok!</button>\
		</div>\
	</div>';

	$().msgpopup({
		text: someHtmlCode,
		custom: true,
		time: false,
	});
});

$('body').on('click', '[data-btn-message="hmm"]', function(){
	$().msgpopup({
		text: 'Glad you like! :)',
	});
});

$('body').on('click', '[data-btn-message="ok"]', function(){
	$().msgpopup({
		text: 'Ok, that\'s all :)',
		type: 'info'
	});
});
