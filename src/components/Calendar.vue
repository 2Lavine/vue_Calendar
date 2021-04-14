<template>
  <div class="Calendar">
    <CalendarHead :month="4" :year="2021"></CalendarHead>
    <CalendarSelector></CalendarSelector>
    <CalendarMonth v-if="mode == 'month'"></CalendarMonth>
    <CalendarDay v-if="mode == 'day'"></CalendarDay>
  </div>
</template>
<script>
import CalendarSelector from "@/components/CalendarSelector";
import CalendarHead from "@/components/CalendarHead";
import CalendarMonth from "@/components/CalendarMonth";
import CalendarDay from "@/components/CalendarDay";
export default {
  name: "Calendar",
  data() {
    return {
      mode: "day",
    };
  },
  components: { CalendarHead, CalendarMonth, CalendarDay, CalendarSelector },
};
</script>
<style>
.Calendar {
  display: flex;
  flex-direction: column;
}
.CalendarHead {
  align-self: start;
}
</style>
