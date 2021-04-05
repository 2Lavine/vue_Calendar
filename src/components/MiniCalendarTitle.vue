<template lang="">
    <div class='MiniCalendarTitle'>
        <div class='MiniCalendarTitleItem' v-for="day in WEEK" :key="day">
            {{day}}
        </div>
    </div>
</template>
<script>
import calendarData from "@/data/calendarData";
let { WEEK } = calendarData;
console.log(WEEK, 233);
export default {
  name: "MiniCalendarTitle",
  data() {
    return {
      WEEK: WEEK,
    };
  },
};
</script>
<style >
.MiniCalendarTitle {
  display: flex;
  flex-direction: row;
  background-color:pink;
  width:21rem;
}
.MiniCalendarTitleItem{
    width:3rem;
}
</style>