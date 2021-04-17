<template>
  <div class="CalendarSelector">
    <div v-for="mode in modeArray" :key="mode" :class="modeItem">
      {{ mode }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modeArray: ["日", "周", "月", "年"],
    };
  },
};
</script>
<style>
.CalendarSelector {
  display: flex;
  flex-direction: row;
}
.active{
  background-color:gray;
  border-radius: 15%;
}
</style>
