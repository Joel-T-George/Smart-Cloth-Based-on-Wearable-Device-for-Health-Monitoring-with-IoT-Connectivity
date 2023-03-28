const pas_dom = document.getElementById("password") 
		// Get the modal
		const modal = document.getElementById("NetworkModel");

		// Get the button that opens the modal
		const Nbtn = document.getElementById("NetBtn");

		// Get the <span> element that closes the modal
		const span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal
		Nbtn.onclick = function() {
		modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

		function C(e){
			pas_dom.value =""
			console.log(e.children[0].innerText)
			console.log(e.children[1].innerText)
			document.getElementById("ssid").value = e.children[0].innerText
			EncrptionChecker(e.children[1].innerText)
		}
		function Showpassword() {
			pas_dom.type === "password"?pas_dom.type='text':pas_dom.type='password';

		}
		function EncrptionChecker(e){
			switch (e) {
				case "None" :
					pas_dom.disabled = true;
					break;
				case "WEP" :
				case "WPA":
				case "WPA2":
				case "WPA3":
				case "WAPI":
				case "WPA+WPA2" :
				case "WPA2-EAP" :
				case "WPA2+WPA3":
					pas_dom.disabled = false;
					break;
				default:
					pas_dom.disabled = false;

					break;
			}
		}
		
