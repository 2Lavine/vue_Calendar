<template lang="">
  <div class="MiniCalendar">
    <div class="MiniCalendarSelector">
      <div class="DateSelector LastMonth"></div>
      <div class="MiniCalendarSelectorText">
        {{ calendarData.year }}年{{ calendarData.month + 1 }}月
      </div>
      <div class="DateSelector nextMonth"></div>
    </div>
    <div class="MiniCalendarTitle">
      <div class="MiniCalendarItem" v-for="day in calendarData.WEEK" :key="day">
        {{ day }}
      </div>
    </div>
    <div class="MiniCalendarContent">
      <div
        class="MiniCalendarItem"
        v-for="dayInfo in calendarData.displayDays"
        :class="dayInfo.month == calendarData.month ? 'active' : ''"
        :key="dayInfo.id"
      >
        {{ dayInfo.day }}
      </div>
    </div>
  </div>
</template>
<script>
import { year, month, FIRSTWEEKDAY, WEEK, preDaysEnd, displayDays }  from "@/data/calendarData";
// console.log(calendarData);
// let { year, month, FIRSTWEEKDAY, WEEK, preDaysEnd, displayDays } = calendarData;
export default {
  name: "MiniCalendar",
  data() {
    return {
      calendarData: {
        year,
        month,
        FIRSTWEEKDAY,
        WEEK,
        preDaysEnd,
        displayDays,
      },
    };
  },
  created() {},
  components: {},
};
</script>
<style scoped>
.MiniCalendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
.MiniCalendarTitle,
.MiniCalendarSelector,
.MiniCalendarContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.MiniCalendarSelector {
  justify-content: center;
  align-items: center;
}
.MiniCalendarSelectorText {
  flex: 1;
}
.MiniCalendarItem {
  width: 14.2%;
}

.DateSelector {
  width: 0.5rem;
  height: 0.5rem;
  border-top: 1px solid;
  border-left: 1px solid;
  display: inline-block;
  cursor: pointer;
}
.LastMonth {
  transform: translateX(1rem) rotate(-45deg);
}
.nextMonth {
  transform: translateX(-1rem) rotate(-225deg);
}
.active {
  font-weight: bold;
}
</style>
