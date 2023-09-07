//DAY OF THE WEEK
const today = new Date().toLocaleDateString("en-EN", { weekday: "long" });
console.log(today);
const dayOfTheWeek = document.getElementById("dayOfTheWeek");
dayOfTheWeek.innerHTML = `Today is ${today}`;

//UTC TIME
const time = new Date().getTime();
const UTCTime = document.getElementById("UTCTime");
UTCTime.innerHTML = `The current UTC Time in milliseconds: ${time}ms`;
