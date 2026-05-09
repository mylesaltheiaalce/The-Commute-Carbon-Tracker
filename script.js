const multipliers = {
  car: 0.2,
  bus: 0.10,
  bike: 0,
  walk: 0
};

let trips = JSON.parse(localStorage.getItem('carbonTrips')) || [];

function addTrip() {
  const name = document.getElementById('name').value || 'Friend';
  const distance = parseFloat(document.getElementById('distance').value);
  const mode = document.getElementById('mode').value;
  
