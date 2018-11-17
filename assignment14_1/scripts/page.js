var Page = (function() {

	function ViewModel() {
		var self = this;
		self.arrivals = ko.observableArray([]);
	}

	return{
			vm: new ViewModel();
       
			request.onload = function() {
			if (request.status === 200) {

			var onlineMessageElement = document.createElement("div");
			onlineMessageElement.setAttribute("id", "online");
			onlineMessageElement.innerHTML = request.responseText;
			document.getElementById("main").appendChild(onlineMessageElement);
			}else {

			console.warn('Error retrieving offline.html');
			}
			};
			request.onerror = function() {

			console.error('Connection error');
		};          
		request.send();
	}
})();