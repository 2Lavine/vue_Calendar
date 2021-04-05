<template lang="">
    <div>
        {{calendarData.year}}年{{calendarData.month+1}}月
    </div>
</template>
<script>
import calendarData from "@/data/calendarData";
console.log(calendarData);
let { year, month } = calendarData;
export default {
  name: "MiniCalendar",
  data() {
    return {
      calendarData: {
        year,
        month,
      },
    };
  },
  created () {
  }
};
</script>
<style>
</style>