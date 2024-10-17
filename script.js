	
fetch('http://localhost:3000/moods')
.then((response) => response.json())
.then((json) => console.log(json));

document.getElementById('moodForm').addEventListener('submit', function(e) {
  e.preventDefault();

const mood = document.getElementById('mood').value;
const energy = document.getElementById('energy').value;
const weather = document.getElementById('weather').value;
const journalEntry = document.getElementById('journalEntry').value;
const date = document.getElementById('date').value;

// Geting selected activities
const activities = [];
if (document.getElementById('activityExercise').checked) activities.push('Exercise');
if (document.getElementById('activityReading').checked) activities.push('Reading');
if (document.getElementById('activityWork').checked) activities.push('Work');
if (document.getElementById('activitySocializing').checked) activities.push('Socializing');

// Creating a list entry
const moodList = document.getElementById('moodList');
const li = document.createElement('li');
li.className = 'list-group-item';


li.innerHTML = `
  <strong>Date:</strong> ${date} <br>
  <strong>Mood:</strong> ${mood} <br>
  <strong>Energy Level:</strong> ${energy}/10 <br>
  <strong>Weather:</strong> ${weather} <br>
  <strong>Activities:</strong> ${activities.join(', ')} <br>
  <strong>Journal Entry:</strong> ${journalEntry}
`;


// Append the new entry to the list
moodList.appendChild(li);

// Clear the form fields
document.getElementById('moodForm').reset();
});

fetch('http://localhost:3000/journalEntries')
.then((response) => response.json())
.then((json) => console.log(json));

// ////////////////............./////
document.getElementById('deleteButton').addEventListener('click', function() {
// Clear the mood select
document.getElementById('mood').selectedIndex = 0;

// Reset the energy level
document.getElementById('energy').value = 5; // Default value

// Uncheck all activity checkboxes
document.getElementById('activityExercise').checked = false;
document.getElementById('activityReading').checked = false;
document.getElementById('activityWork').checked = false;
document.getElementById('activitySocializing').checked = false;

// Clear the weather select
document.getElementById('weather').selectedIndex = 0;

// Clear the date input
document.getElementById('date').value = '';

// Clear the journal entry
document.getElementById('journalEntry').value = '';
});



