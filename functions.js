//<script type="text/javascript">
	//<!--
		function test(){
			var btn = document.getElementById("checkcity");
			if(btn!= null){
				btn.addEventListener("click",function(e){
					var value = document.getElementById("cityzipcode").value;
					if (value != null && value>20000){
						console.log("We've got your area covered!");
						document.getElementById("cityCheck").innerHTML = "We've got your area covered!";
						document.getElementById("cityCheck").className ="green";
						
					}else{
						console.log("Sorry, we haven't expanded to that area yet.");
						document.getElementById("cityCheck").innerHTML = "Sorry, we haven't expanded to that area yet.";
						document.getElementById("cityCheck").className ="red";
					}
					e.preventDefault();
				});
				
			}
			
			/*
			if(zipcode>20000){
				return true;// We’ve got your area covered!
			}
			else{
				console.log("Sorry, we haven’t expanded to that area yet.");
				return false;// Sorry, we haven’t expanded to that area yet.
				
			}
			*/
		}
	//-->
//</script>
test();