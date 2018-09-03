var c = document.getElementById('gingerbread');
var ctx = c.getContext('2d');
//Tete
ctx.beginPath();
ctx.arc(200,90,50,0,Math.PI*2,true);
ctx.fillStyle = "#976F0F";
ctx.fill();
//Sourciles
ctx.beginPath();
ctx.moveTo(175,65);
ctx.quadraticCurveTo(185,55,195,65);
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(205,65);
ctx.quadraticCurveTo(215,55,225,65);
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();
//Yeux
ctx.beginPath();
ctx.arc(185,80,10,0,Math.PI*2,true);
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.beginPath();
ctx.arc(215,80,10,0,Math.PI*2,true);
ctx.fillStyle = "#FFFFFF";
ctx.fill();
//Bouche
ctx.beginPath();
ctx.moveTo(180,105);
ctx.quadraticCurveTo(200,115,220,105);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(180,105);
ctx.quadraticCurveTo(200,125,220,105);
ctx.strokeStyle = "red";
ctx.stroke();
//Bras et corp
ctx.fillStyle = "#976F0F";
ctx.fillRect(80,125,240,30);
ctx.fillRect(150,155,100,200);
//Boutons
ctx.beginPath();
ctx.arc(200,175,12,0,Math.PI*2,true);
ctx.fillStyle = "#7A2976";
ctx.fill();
ctx.beginPath();
ctx.arc(200,225,12,0,Math.PI*2,true);
ctx.fillStyle = "#7A2976";
ctx.fill();
//Mains
ctx.beginPath();
ctx.moveTo(80,155);
ctx.quadraticCurveTo(60,140,80,125);
ctx.closePath();
ctx.fillStyle = "#976F0F";
ctx.fill();
ctx.beginPath();
ctx.moveTo(320,155);
ctx.quadraticCurveTo(340,140,320,125);
ctx.closePath();
ctx.fillStyle = "#976F0F";
ctx.fill();
//Entre jambe
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(190,300,20,60);
ctx.beginPath();
ctx.moveTo(190,300);
ctx.quadraticCurveTo(200,285,210,300);
ctx.closePath();
ctx.fillStyle = "#FFFFFF";
ctx.fill();
//Pied
ctx.beginPath();
ctx.moveTo(150,355);
ctx.quadraticCurveTo(170,370,190,355);
ctx.closePath();
ctx.fillStyle = "#976F0F";
ctx.fill();
ctx.beginPath();
ctx.moveTo(210,355);
ctx.quadraticCurveTo(230,370,250,355);
ctx.closePath();
ctx.fillStyle = "#976F0F";
ctx.fill();
