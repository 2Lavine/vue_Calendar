<template>
  <div class="CalendarDay">
    <table>
      <tr v-for="hour in DAYHOURS" :key="hour">
        {{hour}}:00
      </tr>
    </table>
  </div>
</template>
<script>
import { DAYHOURS } from "@/data/calendarData";
export default {
  data() {
    return {
      DAYHOURS: DAYHOURS,
    };
  },
};
</script>
<style>
.CalendarDay {
  overflow: auto;
  height: 80vh;
}
.CalendarDay > table {
  table-layout: fixed;
}
.CalendarDay > table tr {
  height: 10vh;
}
</style>
