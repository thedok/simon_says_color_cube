$(document).ready(function(){
	$('#get_color').on('click', function() {
		$.ajax({
			url: '/color',
			type: 'POST',
			dataType: 'json'
		}).done(function(server_data) {
			$('li:nth-child('+server_data.cell+')').css('background', server_data.color )
			console.log(server_data.color)
			console.log(typeof server_data)
			console.log(server_data)
		})
	})
});