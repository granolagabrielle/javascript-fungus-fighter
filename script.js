// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

// global variables

let fungusHP = 100;
let attackAP = 100;
const attackTotal = document.getElementById('ap-total');
const healthTotal = document.getElementById('health-total');
const fungusMovement = document.getElementById('fungus-movement');
// const buttons = document.getElementsBy('attack-btn');
const arcaneButton = document.getElementById('arcane-button');
const entangleButton = document.getElementById('entangle-button');
const dragonButton = document.getElementById('dragon-button');
const starButton = document.getElementById('star-button');
const apMeter = document.getElementById('ap-meter');
const hpMeter = document.getElementById('hp-meter');

function onReady() {
  console.log('Ready to go!');

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}
onReady();

// arcane scepter button function

function useArcaneScepter(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 12)}`;
  healthTotal.innerHTML = `${(fungusHP -= 14)}`;
  apMeter.value -= 12;
  hpMeter.value -= 14;
  // test new levels
  console.log(attackAP, fungusHP);
  checkHealth();
}

// entangle button function

function useEntangle(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 23)}`;
  healthTotal.innerHTML = `${(fungusHP -= 9)}`;
  apMeter.value -= 12;
  hpMeter.value -= 14;
  // test new levels
  console.log(attackAP, fungusHP);
  checkHealth();
}

// dragon-blade button function

function useDragonBlade(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 38)}`;
  healthTotal.innerHTML = `${(fungusHP -= 47)}`;
  apMeter.value -= 12;
  hpMeter.value -= 14;
  // test new levels
  console.log(attackAP, fungusHP);
  checkHealth();
}

// star-fire button function

function useStarFire(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 33)}`;
  healthTotal.innerHTML = `${(fungusHP -= 25)}`;
  apMeter.value -= 12;
  hpMeter.value -= 14;
  // test new levels
  console.log(attackAP, fungusHP);
  checkHealth();
}

// function changeFungusStatus() {
//   let fungusStatus = document.querySelector('#walk');
//   fungusStatus.classList.replace('walk', 'dead');
// }

// function to check health

function checkHealth() {
  if (fungusHP <= 0) {
    let fungusHealth = document.querySelector('.walk');
    fungusHealth.classList.replace('walk', 'dead');
    healthTotal.innerHTML = `0`;
  }
  if (attackAP <= 0) {
    let fungusHealth = document.querySelector('.walk');
    fungusHealth.classList.replace('walk', 'jump');
    attackTotal.innerHTML = `0`;
    arcaneButton.disabled = true;
    entangleButton.disabled = true;
    dragonButton.disabled = true;
    starButton.disabled = true;
  }
}

// The graveyard...

// let fungusStatus = document.getElementsByClassName('dead');
// fungusStatus.classList.replace('dead', 'walk');

// fungusStatus.classList.remove('#freaky-fungus walk');
// fungusStatus.classList.add('#freaky-fungus dead');

// let fungusHealth = document.querySelector('.walk');
// fungusHealth.remove('#walk');
// fungusHealth.add()
