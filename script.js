// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

// global variables

let fungusHP = 100;
let attackAP = 100;
const attackTotal = document.getElementById('ap-total');
let healthTotal = document.getElementById('health-total');
const fungusMovement = document.getElementById('fungus-movement');
// const buttons = document.getElementsByClassName('attack-btn');
const arcaneButton = document.getElementById('arcane-button');
const entangleButton = document.getElementById('entangle-button');
const dragonButton = document.getElementById('dragon-button');
const starButton = document.getElementById('star-button');
const apMeter = document.getElementById('ap-meter');
let hpMeter = document.getElementById('hp-meter');

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
  apMeter.value -= 23;
  hpMeter.value -= 9;
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
  apMeter.value -= 38;
  hpMeter.value -= 47;
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
  apMeter.value -= 33;
  hpMeter.value -= 25;
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
    fungusMovement.classList.remove('freaky-fungus', 'walk');
    fungusMovement.classList.add('freaky-fungus', 'dead');
    healthTotal.innerHTML = `0`;
  }
  if (attackAP <= 0) {
    fungusMovement.classList.remove('freaky-fungus', 'walk');
    fungusMovement.classList.add('freaky-fungus', 'jump');
    attackTotal.innerHTML = `0`;
    arcaneButton.disabled = true;
    entangleButton.disabled = true;
    dragonButton.disabled = true;
    starButton.disabled = true;
  }
  if (fungusHP < 50) {
    setInterval(intervalHealth, 1000);
  }
}

function intervalHealth() {
  if (fungusHP === 100) {
    let myInterval = setInterval(intervalHealth, 1000);
    clearInterval(myInterval);
  } else {
    fungusHP++;
  }
  healthTotal.value = fungusHP;
  hpMeter.value = fungusHP;
  healthTotal.innerHTML = `${fungusHP}`;
}

// The graveyard...

// let fungusStatus = document.getElementsByClassName('dead');
// fungusStatus.classList.replace('dead', 'walk');

// fungusStatus.classList.remove('#freaky-fungus walk');
// fungusStatus.classList.add('#freaky-fungus dead');

// let fungusHealth = document.querySelector('.walk');
// fungusHealth.remove('#walk');
// fungusHealth.add()
