// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

// global variables

let fungusHP = 100;
let attackAP = 100;
const attackTotal = document.getElementById('ap-total');
const healthTotal = document.getElementById('health-total');

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
  // test new levels
  console.log(attackAP, fungusHP);
}

// entangle button function

function useEntangle(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 23)}`;
  healthTotal.innerHTML = `${(fungusHP -= 9)}`;
  // test new levels
  console.log(attackAP, fungusHP);
}

// dragon-blade button function

function useDragonBlade(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 38)}`;
  healthTotal.innerHTML = `${(fungusHP -= 47)}`;
  // test new levels
  console.log(attackAP, fungusHP);
}

// star-fire button function

function useStarFire(event) {
  event.target;
  // update levels with damage
  attackTotal.innerHTML = `${(attackAP -= 33)}`;
  healthTotal.innerHTML = `${(fungusHP -= 25)}`;
  // test new levels
  console.log(attackAP, fungusHP);
}
