<template>
  <div class="CalendarDay">
    <table class="CalendarDaytable">
      <div v-for="(hour, index) in eventHours" :key="index + '_' + hour">
        <Event
          :color="'255,0,0'"
          :height="height"
          :top="`${(hour * 6 + 0.8) * 16}px`"
        ></Event>
      </div>
      <template v-for="hour in DAYHOURS">
        <tr
          class="CalendarRow"
          v-for="minute in MINUTES"
          :key="hour + ':' + minute"
          @click="addEventItem($event, hour)"
        >
          <td class="CalendarRowHead" v-if="minute == '00'">
            {{ hour }}:{{ minute }}
          </td>
          <td class="CalendarCell" v-if="minute == '00'"></td>
        </tr>
      </template>
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
      MINUTES: ["00", "15", "30", "45"],
      clickTime: { last: 0, now: 0 },
      eventHours: [],
      eventHeight: Array(24).fill("1.5rem"),
      height: "64px",
    };
  },

  components: { Event },
  methods: {
    addEventItem(event, hour) {
      this.clickTime.now = event.timeStamp;
      if (this.clickTime.last != 0) {
        if (this.clickTime.now - this.clickTime.last < 1000) {
          this.eventHours = [...this.eventHours, hour];
          console.log(this.eventHours);
          // document.getElementById("CalendarDaytable").appendChild(Event);
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
  position: relative;
}
.CalendarDay > table {
  margin-top: 1rem;
  table-layout: fixed;
  border-collapse: collapse;
}
.CalendarRow {
  height: 1.5rem;
  user-select: none;
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
  width: 95rem;
  vertical-align: top;
}
</style>
