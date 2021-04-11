<template>
  <div class="CalendarMonth">
    <table>
      <thead>
        <tr>
          <th v-for="weekDay in WEEK" :key="weekDay">{{ weekDay }}</th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import { WEEK } from "@/data/calendarData";
export default {
  data() {
    return {
      WEEK,
    };
  },
};
</script>
<style>
.CalendarMonth > table {
  width: 100%;
}
</style>
