var requestform = document.getElementById("requestform");

requestform.addEventListener("change",Totalprice);

function Totalprice(){
	var result = 0;
	// get style
	var stylearr = document.getElementsByClassName("foodstyle");
	for(i=0;i<stylearr.length;i++){
		if(stylearr[i].checked){
			result = Number(stylearr[i].value);
		}
	}
	
	//get tip
	var tiparr = document.getElementsByClassName("tip");
	for(j=0;j<tiparr.length;j++){
		if(tiparr[j].checked && result>0){
			result *= (1+ tiparr[j].value /100); 
		}
		
	}
	
	result= result.toFixed(2);
	
	var totalelem = document.getElementById("total");
	totalelem.innerHTML = result;
}