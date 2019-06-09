//Variabelen die worden gebruikt
var buffer, context, controller, kirby, loop, image;
buffer = document.createElement("canvas").getContext("2d");
//Het canvas wordt geselecteerd en de hoogte en breedte wordt veranderd
context = document.querySelector("canvas").getContext("2d");

buffer.canvas.height = 400;
buffer.canvas.width = 800;
context.canvas.height = 400;
context.canvas.width = 800;

//Het vierkant wat gebruikt word om te bewegen
kirby = {

  jumping: true,
  radius: 30,
  x: 360, // center of the canvas
  x_velocity: 0,
  y: 0,
  y_velocity: 0

};

//Het controller object wordt gebruikt om te kijken welke knoppen ingedrukt worden
controller = {

  left: false,
  right: false,
  up: false,
  keyListener: function(event) {

    var key_state = (event.type == "keydown") ? true : false;

    switch (event.keyCode) {

      case 37: // left key
        controller.left = key_state;
        break;
      case 38: // up key
        controller.up = key_state;
        break;
      case 39: // right key
        controller.right = key_state;
        break;

    }

  }

};

//Deze loop loopt elke keer dat de browser de pagina opnieuw tekent (elke frame dus)
loop = function() {

  if (controller.up && kirby.jumping == false) {

    kirby.y_velocity -= 30;
    kirby.jumping = true;

  }

  if (controller.left) {

    kirby.x_velocity -= 0.6;

  }

  if (controller.right) {

    kirby.x_velocity += 0.6;

  }

  kirby.y_velocity += 1.5; // gravity
  kirby.x += kirby.x_velocity;
  kirby.y += kirby.y_velocity;
  kirby.x_velocity *= 0.88; // friction
  kirby.y_velocity *= 0.88; // friction

  // Wanneer het vierkant onder de lijn komt
  if (kirby.y > 350 - 40) {

    kirby.jumping = false;
    kirby.y = 350 - 40;
    kirby.y_velocity = 0;

  }

  // Als het vierkant links van het scherm gaat
  if (kirby.x < -32) {

    kirby.x = 832;

  } else if (kirby.x > 832) { //Als het vierkant rechts van het scherm gaat

    kirby.x = -32;

  }

  //achtergrond
  context.fillStyle = "#26eaea";
  context.fillRect(0, 0, 800, 400); // x, y, width, height
  //Vierkant
  context.fillStyle = "#F2859D"
  context.beginPath();
  context.arc(kirby.x, kirby.y, kirby.radius, 0, 2 * Math.PI, false);
  context.fill();
  //Grond
  context.strokeStyle = "#73f958";
  context.lineWidth = 60;
  context.beginPath();
  context.moveTo(0, 370);
  context.lineTo(800, 370);
  context.stroke();
  //ster bron: https://stackoverflow.com/questions/14580033/algorithm-for-drawing-a-5-point-star
  var alpha = (2 * Math.PI) / 10;
  var radius = 15;
  var starXY = [200, 170] //x, y

  context.beginPath();

  for (var i = 11; i != 0; i--) {
    var r = radius * (i % 2 + 1) / 2; //% (modulus) geeft de overige waarde terug van het delen door som
    var omega = alpha * i;
    context.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
  }
  context.closePath();
  context.fillStyle = "#fbff08";
  context.fill();

  //Zegt dat de browser de loop functie moet uitvoeren elke frame
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
