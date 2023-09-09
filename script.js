//DAY OF THE WEEK
const today = new Date().toLocaleDateString("en-EN", { weekday: "long" });
const dayOfTheWeek = document.getElementById("dayOfTheWeek");
dayOfTheWeek.innerHTML = today;

//UTC TIME

function currentUpdatedTime() {
  const time = new Date();
  const UTCTimeInMilliseconds = time.getTime();
  const UTCTime = document.getElementById("UTCTime");
  UTCTime.innerHTML = UTCTimeInMilliseconds;
}
currentUpdatedTime();
setInterval(currentUpdatedTime, 1000);

