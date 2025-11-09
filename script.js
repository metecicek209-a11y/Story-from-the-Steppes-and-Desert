const toggleBtn = document.getElementById('check');
document.getElementById("text13").innerHTML= "The Man Who Lived in the Desert tells the story of a man who left behind his city, his possessions, and his past to live in the endless silence of the desert. He was tired of noise, greed, and the emptiness of modern life. In the desert, surrounded by sand and wind, he searched for peace and the true meaning of existence. Every sunrise taught him patience; every sunset reminded him of the beauty of endings. Though he had no wealth or comfort, he found freedom in simplicity and strength in solitude. The desert became both his home and his teacher. In time, he realized that true happiness does not come from people or power, but from harmony with nature and understanding one’s own soul. His story is a quiet reminder that sometimes we must lose everything to truly find ourselves."
document.getElementById("text12").innerHTML = "Mete Han, who lived between 234 B.C. and 174 B.C., was one of the most influential figures in Turkish history and the founder of the Great Hun Empire. His original name was Modu Chanyu, but he is known as Mete Han in Turkish sources. Mete Han successfully united the Hun tribes, transforming them into a powerful and centralized state that became a dominant force in Central Asia and China. He revolutionized military tactics by developing advanced archery and cavalry strategies, and his campaigns forced China to pay tribute, greatly enhancing the economic and political strength of the Huns. Beyond his military achievements, Mete Han laid the foundations of Turkish statehood and military discipline, traditions that would deeply influence later Turkic empires. He was not only a brilliant warrior but also a skilled strategist and diplomat, leaving an enduring legacy in the history of the Turkish people and Central Asia.";
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
