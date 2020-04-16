function randomKey(){
	var keys=["q","w","e","r","t","y","u","i","1","2","3","4","5","6","7"];
	var key=Math.floor((Math.random())*15);
	return keys[key];
}
function playPiano(text){
	var aud;
	switch(text){
		case "q":{
			aud="w1.mp3";
			break;
		}
		case "w":{
			aud="w2.mp3";
			break;
		}
		case "e":{
			aud="w3.mp3";
			break;
		}
		case "r":{
			aud="w4.mp3";
			break;
		}
		case "t":{
			aud="w5.mp3";
			break;
		}
		case "y":{
			aud="w6.mp3";
			break;
		}
		case "u":{
			aud="w7.mp3";
			break;
		}
		case "i":{
			aud="w8.mp3";
			break;
		}
		case "o":{
			aud="w9.mp3";
			break;
		}
		case "p":{
			aud="w10.mp3";
			break;
		}
		case "1":{
			aud="b1.mp3";
			break;
		}
		case "2":{
			aud="b2.mp3";
			break;
		}
		case "3":{
			aud="b3.mp3";
			break;
		}
		case "4":{
			aud="b4.mp3";
			break;
		}
		case "5":{
			aud="b5.mp3";
			break;
		}
		case "6":{
			aud="b6.mp3";
			break;
		}
		case "7":{
			aud="b7.mp3";
			break;
		}
		default:{
			console.log("Invalid input");
		}
	}
	var audio=new Audio("sounds/"+aud);
	audio.play();
}
for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
	var text=this.innerHTML;
	playPiano(text);
});}
document.addEventListener("keydown",function(event){
	var text=event.key;
	playPiano(text);
	})