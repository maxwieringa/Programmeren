//declareren array's die gebruikt worden voor afbeeldingen of tekst
var imgArray = ['kirby1.png', 'kirby3.png', 'kirby2.png'];
var cursedArray = ['breakfast.jpg', 'cutecate.jpg', 'swearword.jpg', 'telletubbie.jpg', 'vape.jpg']
var sentenceArray = [' peace.', ' safety.', ' nothing.'];

//functie om afbeeldingen heel even te laten zien en dan weer weg te halen
function curse() {
  var i = 0;
  //maakt de afbeelding zichtbaar
  document.getElementById('cursed').style.visibility = 'visible';
  //zet een interval zodat het soort van door afbeeldingen heen gaat
  setInterval(function() {
    for (i = 0; i < 5; i++) {
      document.getElementById('cursed').src = 'style/' + cursedArray[i];
    }
  }, 1000);

  // interval zodat afbeelding na 2 seconden weg gaat
  setInterval(function() {
    if (i == 5) {
      document.getElementById('cursed').style.visibility = 'collapse';
    }
  }, 2000);

}

//functies om ervoor te zorgen dat het plaatje van kirby veranderd en heeft een parameter met een index mee
function star() {
  insert(0);
}

function knife() {
  insert(1);
}

function nothing() {
  insert(2);
}

//functie om plaatje en tekst van Kirby te veranderen
function insert(index) {

  var kirbyImg = imgArray[index];
  var sentence = sentenceArray[index];

  document.querySelector("h1").textContent = "Kerbe has granted you" + sentence;

  document.getElementById("kirby").src = 'style/' + kirbyImg;

}

//functies om plaatje te veranderen van de afbeeldingen aan de zijkanten
function cursed1() {
  document.getElementById('1').src = 'style/breakfast.jpg';
}

function cursed2() {
  document.getElementById('2').src = 'style/cutecat.jpg';
}

function cursed3() {
  document.getElementById('3').src = 'style/mariomouse.png';
}

function cursed4() {
  document.getElementById('4').src = 'style/swearword.jpg';
}

function cursed5() {
  document.getElementById('5').src = 'style/telletubbie.jpg';
}

function cursed6() {
  document.getElementById('6').src = 'style/vape.jpg';
}

//Alle event listeners 
document.getElementById('cursebutton').addEventListener("click", curse);
document.getElementById('star').addEventListener("click", star);
document.getElementById('knife').addEventListener("click", knife);
document.getElementById('nothing').addEventListener("click", nothing);

document.getElementById('1').addEventListener("mouseover", cursed1);
document.getElementById('2').addEventListener("mouseover", cursed2);
document.getElementById('3').addEventListener("mouseover", cursed3);
document.getElementById('4').addEventListener("mouseover", cursed4);
document.getElementById('5').addEventListener("mouseover", cursed5);
document.getElementById('6').addEventListener("mouseover", cursed6);
