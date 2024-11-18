// Question 1: Update Date and Time every second
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  document.getElementById('date-time').textContent = `${date} ${time}`;
}
updateDateTime();
setInterval(updateDateTime, 1000); 

// Question 2: Display Current Month
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const currentMonth = new Date().getMonth();
const monthName = monthNames[currentMonth];
alert(`The Current Month is ${monthName}.`);

// Question 3: Display Current Day Abbreviation
const dayAbb = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDay = new Date().getDay();
const dayAbbr = dayAbb[currentDay];
alert(`The Current Day is ${dayAbbr}`);

// Question 4: Check if it’s Fun day
const currentDay2 = new Date().getDay();
if (currentDay2 === 0 || currentDay2 === 6) {
  alert("It’s Fun day");
}

// Question 5: First or Last Days of the Month
const currentDate = new Date().getDate();
if (currentDate < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// Question 6: Minutes since Jan 1, 1970
let currentDatee = new Date();
let millisecondsSinceEpoch = currentDatee.getTime();
let minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
alert(`Minutes since midnight, Jan. 1, 1970: ${minutesSinceEpoch}`);

// Question 7: AM or PM
let currentDateee = new Date();
let currentHour = currentDateee.getHours();
alert(currentHour < 12 ? "It's AM" : "It's PM");

// Question 8: Last Day of December 2020
let laterDate = new Date(2020, 11, 31);
alert(`The last day of the last month of 2020 is: ${laterDate}`);

// Question 9: Days since 1st Ramadan (June 18, 2015)
let ramadanStartDate = new Date(2015, 5, 18);
let currentDateeee = new Date();
let timeDifference = currentDateeee - ramadanStartDate;
let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert(`Number of days passed since 1st Ramadan (June 18, 2015): ${daysPassed}`);

// Question 10: Seconds since the start of 2015
let startOf2015 = new Date(2015, 0, 1); 
let currentDateeeee = new Date();
let timeDifferencee = currentDateeeee - startOf2015;
let secondsElapsed = Math.floor(timeDifferencee / 1000);
let outputHTML = `
  <p>Seconds elapsed since the beginning of 2015: ${secondsElapsed}</p>
`;

// Question 11: Update Date by adding 1 hour
let currentDate11 = new Date();
currentDate11.setHours(currentDate11.getHours() + 1);
outputHTML += `<p>Updated Date and Time (1 hour later): ${currentDate11}</p>`;

// Question 12: Date 100 years back
let currentDate12 = new Date();
currentDate12.setFullYear(currentDate12.getFullYear() - 100);
alert("Date 100 years back: " + currentDate12);

// Question 13: Calculate Birth Year
let age = prompt("Please enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
outputHTML += `<p>Your birth year is: ${birthYear}</p>`;

// Question 14: K-Electric Bill Calculation
let customerName = "John Doe"; 
let currentDate14 = new Date();
let currentMonth14 = currentDate14.toLocaleString("default", { month: "long" });
let numberOfUnits = 420; 
let chargesPerUnit = 18.35;  
let latePaymentSurcharge = 150.00; 
let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
outputHTML += `
  <h2>K-Electric Bill</h2>
  <p><strong>Customer Name:</strong> ${customerName}</p>
  <p><strong>Month:</strong> ${currentMonth14}</p>
  <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
  <p><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</p>
  <p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>
  <p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>
  <p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>
`;

// Append all outputs to the document body
document.body.innerHTML = outputHTML;





