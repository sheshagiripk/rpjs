var parseID='UdKqeuffHFQUxTruh3ip3YCZi1wbIAA8P4XcoZ6k';
var parseRestKey='7pZjrV85Jb7IdEsJwxUtav4WcSGCXhlZk6BZfkRO';
$(document).ready(function(){ 
	alert("HI");
	getMessages(); 
	$("#send").click(function(){
		alert('Hi');
	var username = $('input[name=username]').attr('value'); var message = $('input[name=message]').attr('value'); alert(username) alert('!'')
	$.ajax({
	url: 'https://api.parse.com/1/classes/MessageBoard', headers: {
		'X-Parse-Application-Id': parseID, 'X-Parse-REST-API-Key': parseRestKey
	}, contentType: 'application/json', dataType: 'json', processData: false, data: JSON.stringify({
		'username': username,
		'message': message }),
	type: 'POST', success: function() {
		alert('sent'); getMessages();
	}, error: function() {
		alert('error');
	} });

}); })
url: 'https://api.parse.com/1/classes/MessageBoard', headers: {
	'X-Parse-Application-Id': parseID, 'X-Parse-REST-API-Key': parseRestKey
}, contentType: 'application/json', dataType: 'json', processData: false, data: JSON.stringify({
	'username': username,
	'message': message }),
type: 'POST', success: function() {
	alert('sent'); getMessages();
}, error: function() {
	alert('error');
	function getMessages() { $.ajax({
		url: 'https://api.parse.com/1/classes/MessageBoard', headers: {
			'X-Parse-Application-Id': parseID,
			'X-Parse-REST-API-Key': parseRestKey },
			contentType: 'application/json', dataType: 'json', type: 'GET', success: function(data) {
				alert('get');
				updateView(data); },
				error: function() { alert('error');
			} });
}

function updateView(messages) {
	var table=$('.table tbody'); table.html(''); $.each(messages.results, function (index, value) {
		var trEl = $('<tr><td>'
			+ value.username + '</td><td>' + value.message + '</td></tr>');
		table.append(trEl); });
	alert(messages);
}