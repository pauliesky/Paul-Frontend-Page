//DAY OF THE WEEK
const today = new Date().toLocaleDateString("en-EN", { weekday: "long" });
console.log(today);
const dayOfTheWeek = document.getElementById("dayOfTheWeek");
dayOfTheWeek.innerHTML = `Today is ${today}`;

//UTC TIME
const time = new Date();
const hour = time.getUTCHours() * 60 * 60 * 1000;
const minutes = time.getUTCMinutes() * 60 * 1000;
const seconds = time.getSeconds() * 1000;
const currentUTCTime = hour + minutes + seconds;
console.log(currentUTCTime);
const UTCTime = document.getElementById("UTCTime");
UTCTime.innerHTML = `The current UTC Time in milliseconds: ${currentUTCTime}ms`;
