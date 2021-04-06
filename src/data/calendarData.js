import * as dayjs from "dayjs";
import * as dayOfYear from "dayjs/plugin/dayOfYear";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);

const MONTHDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const SUMMONTHDAYS = MONTHDAYS.reduce(
  (res, cur, index) => {
    console.log(res, cur, index, res[index]);
    res.push(cur + res[index]);
    return res;
  },
  [0]
);
const date = new Date();
let WEEK = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let weekDay = date.getDay(); // start on Sunday (0=>Sunday)
let FIRSTWEEKDAY = new Date(year, month, 1).getDay();
let LASTTWEEKDAY = new Date(year, month, MONTHDAYS[month]).getDay();
let preDaysEnd = month !== 0 ? MONTHDAYS[month - 1] : MONTHDAYS[11];
let remainDaysCount = 6 - LASTTWEEKDAY;

let getDisplayDays = (month) => {
  let displayDays = [];
  for (let i = 0; i < MONTHDAYS[month]; i++) {
    // displayDays.push(i + 1);
    displayDays.push({
      month: month,
      day: i + 1,
      id: SUMMONTHDAYS[month] + i + 1,
    });
  }
  displayDays = new Array(FIRSTWEEKDAY)
    .fill(0)
    .map((val, index) => {
      return {
        month: month - 1,
        day: preDaysEnd - FIRSTWEEKDAY + index + 1,
        id: SUMMONTHDAYS[month - 1] + preDaysEnd - FIRSTWEEKDAY + index + 1,
      };
    })
    .concat(displayDays);
  let nextMonthDay = 1;
  while (displayDays.length < 42) {
    displayDays.push({
      month: month + 1,
      day: nextMonthDay++,
      id: SUMMONTHDAYS[month + 1] + nextMonthDay - 1,
    });
  }
  return displayDays;
};
let displayDays = getDisplayDays(month);
let calendarData = {
  WEEK,
  day,
  month,
  year,
  weekDay,
  FIRSTWEEKDAY,
  LASTTWEEKDAY,
  SUMMONTHDAYS,
  preDaysEnd,
  remainDaysCount,
  MONTHDAYS,
  displayDays,
  getDisplayDays,
};
// export let week = WEEK;
//每个月份显示 42 天 ,把之前或之后的填为' '

export default calendarData;
