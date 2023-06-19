// intilize constants

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYears = "5 Jan 2024";

function countDown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  // console.log(newYearDate - currentDate);

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const dys = Math.floor(totalSeconds / 3600) / 24;
  const hrs = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = Math.floor(totalSeconds) % 60;

  //   console.log(dys, hrs, mins, secs);
}

// initial call
countDown();

setInterval(countDown, 1000);
