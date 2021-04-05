const MONTHDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const SUMMONTHDAYS = MONTHDAYS.reduce(
  (res, cur, index) => {
    console.log(res, cur, index, res[index]);
    res.push(cur + res[index]);
    return res;
  },
  [0]
)
const date = new Date();
let MONTH = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let weekDay = date.getDay(); // start on Sunday (0=>Sunday)
let FIRSTWEEKDAY = new Date(year, month, 0).getDay();
let LASTTWEEKDAY = new Date(year, month, MONTHDAYS[month]).getDay();
let preDaysStart =
  month !== 0
    ? MONTHDAYS[month - 1] - FIRSTWEEKDAY - 1
    : MONTHDAYS[11] - FIRSTWEEKDAY - 1;
let remainDaysCount = 6 - LASTTWEEKDAY;

let calendarData = {
  MONTH,
  day,
  month,
  year,
  weekDay,
  FIRSTWEEKDAY,
  LASTTWEEKDAY,
  SUMMONTHDAYS,
  preDaysStart,
  remainDaysCount,
  MONTHDAYS,
};
export default calendarData;
