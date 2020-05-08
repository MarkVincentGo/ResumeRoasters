export default (year, month) => {
  // this gets the first day of the month
  const currentDate = new Date(year, month);
  let day = currentDate.getDay();
  let date = currentDate.getDate();
  // max days of each month, ternary is for February
  const maxMonthDays = [31, year % 4 === 0 ? 29 : 28 , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // the month as a whole, put weeks in here
  const MonthMatrix = [];

  for (let i = 0; i < 6; i++) {
    let k = maxMonthDays[month];
    let weekArray = new Array(7).fill('X')
    if (i === 0) {
      for (let j = day; j < weekArray.length; j++) {
        weekArray[j] = date;
        date++;
      }
    } else {
      for (let j = 0; j < weekArray.length; j++) {
        if (date < k + 1) {
          weekArray[j] = date;
          date++;
        } else {
          break;
        }
      }
    }
    MonthMatrix.push(weekArray)
    if (date === k + 1) break;
  }
  return MonthMatrix;
}
