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
  
  if (!distance || distance <= 0) {
    document.getElementById('message').textContent = "⚠️ Please enter a valid distance!";
    return;
  }
  
  const saved = ((multipliers.car - multipliers[mode]) * distance).toFixed(2);
  
  trips.unshift({
    name: name,
    distance: distance,
    mode: mode,
    saved: saved,
    date: new Date().toLocaleDateString()
  });
  
  localStorage.setItem('carbonTrips', JSON.stringify(trips));
  document.getElementById('message').textContent = `Great job ${name}! You saved ${saved} kg CO₂ today.`;
  document.getElementById('distance').value = '';
  
  render();
}

function render() {
    let total = 0,
        green = 0;
    const log = document.getElementById('logList');
    log.innerHTML = '';
