jQuery(document).ready(function($) {
	jQuery(document).on('click', '.test', function(event) {
		jQuery.ajax({
			url: 'http://richmiles.co.za/wp-json/posts/74',
			type: 'GET',
		})
		.done(function(data) {
			jQuery('.test_header').html(data.title);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});	
});