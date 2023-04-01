let time = document.querySelector('#time');
let date = document.querySelector('#date');

setInterval(() => {
  Today();
}, 1000);

function Today() {
  let today = new Date();
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dayName = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri'];

  let carruntime = `${
    today.getHours() < 9 ? '0' + today.getHours() : today.getHours()
  }:${today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes()}:
${today.getSeconds() < 9 ? '0' + today.getSeconds() : today.getSeconds()}`;

  let carrunDate = `${dayName[today.getDay() - 1]},   ${today.getDate()} ${
    monthName[today.getMonth() - 1]
  } ${today.getFullYear()}`;

  time.innerHTML = carruntime;
  date.innerHTML = carrunDate;
}
