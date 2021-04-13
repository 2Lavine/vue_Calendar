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
<style></style>
