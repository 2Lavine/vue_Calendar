<template>
  <div class="Calendar">
    <CalendarSelector class='CalendarSelector'></CalendarSelector>
    <CalendarHead :month="4" :year="2021"></CalendarHead>
    <router-view></router-view>
  </div>
</template>
<script>
import CalendarSelector from "@/components/CalendarSelector";
import CalendarHead from "@/components/CalendarHead";
export default {
  name: "Calendar",
  data() {
    return {
      mode: "day",
    };
  },
  components: { CalendarHead,  CalendarSelector },
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
.CalendarSelector{
  align-self: center;
}

</style>
