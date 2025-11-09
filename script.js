const toggleBtn = document.getElementById('check');

toggleBtn.addEventListener("change",function(){

	if(toggleBtn.checked){
		document.body.style.backgroundImage = "url('desert.jpg')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
		const navbar = document.getElementById('navbar');
		navbar.style.backgroundColor = "rgba(0,0,0,0)";
		document.getElementById('infoBox1').style.visibility = "hidden";
		document.getElementById('infoBox2').style.visibility = "visible";
		document.getElementById('camel').style.visibility = "visible";
		document.getElementById('metehan').style.visibility = "hidden";

	}
	else{
		document.body.style.backgroundImage = "url('steppes.jpg')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
		const navbar = document.getElementById('navbar');
		navbar.style.backgroundColor = "rgba(34,34,34,0.1)";
		document.getElementById('infoBox1').style.visibility = "visible";
		document.getElementById('infoBox2').style.visibility = "hidden";
		document.getElementById('metehan').style.visibility = "visible";
		document.getElementById('camel').style.visibility = "hidden";
	}


});