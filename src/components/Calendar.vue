<template>
  <div class="Calendar">
    <CalendarHead :month="4" :year="2021"></CalendarHead>
    <table>
      <thead>
        <tr>
          <th v-for="weekDay in WEEK" :key="weekDay">{{ weekDay }}</th>
        </tr>
      </thead>
    </table>
    <!-- <ul>
      <li v-for="weekDay in WEEK" :key="weekDay">{{ weekDay }}</li>
    </ul> -->
  </div>
</template>
<script>
import { WEEK } from "@/data/calendarData";
import CalendarHead from "@/components/CalendarHead";
export default {
  name: "Calendar",
  components: { CalendarHead },
  data() {
    return {
      WEEK,
    };
  },
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
