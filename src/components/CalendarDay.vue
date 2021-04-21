<template>
  <div class="CalendarDay">
    <table>
      <tr
        class="CalendarRow"
        v-for="(hour, index) in DAYHOURS"
        :key="hour"
        @click="addEventItem($event, hour)"
      >
        <td class="CalendarRowHead">{{ hour }}:00</td>
        <td class="CalendarCell">
          <Event
            v-if="eventHours[hour] == true"
            :color="'255,0,0'"
            :height="eventHeight[index]"
          ></Event>
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
      clickTime: { last: 0, now: 0 },
      eventHours: {},
      eventHeight: Array(24).fill('10vh'),
    };
  },

  components: { Event },
  methods: {
    addEventItem(event, hour) {
      this.clickTime.now = event.timeStamp;
      if (this.clickTime.last != 0) {
        if (this.clickTime.now - this.clickTime.last < 1000) {
          this.eventHours = { ...this.eventHours, [hour]: true };
        }
      }
      this.clickTime.last = event.timeStamp;
    },
  },
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
  vertical-align: top;
}
</style>
