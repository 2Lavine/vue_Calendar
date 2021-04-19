<template>
  <div class="CalendarDay">
    <table>
      <tr class="CalendarRow" v-for="hour in DAYHOURS" :key="hour">
        <td class="CalendarRowHead">{{ hour }}:00</td>
        <td class="CalendarCell">
          <Event v-if="hour == '01'" :color="'255,0,0'"></Event>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { DAYHOURS } from "@/data/calendarData";
import Event from "@/components/Event.vue";
export default {
  data() {
    return {
      DAYHOURS: DAYHOURS,
    };
  },
  components: { Event },
};
</script>
<style>
.CalendarDay {
  overflow: auto;
  height: 90vh;
}
.CalendarDay > table {
  margin-top: 1rem;
  table-layout: fixed;
  border-collapse: collapse;
}
.CalendarRow {
  height: 10vh;
}
.CalendarRowHead {
  text-align: center;
  vertical-align: top;
  transform: translateY(-0.75rem);
  min-width: 5rem;
  color: rgba(189, 189, 189);
  /* font-size:1rem; */
}
.CalendarCell {
  border-top: rgb(229, 229, 229) 1px solid;
  width: 100%;
  height: 10vh;
}
</style>
