<template>
  <div class="CalendarSelector">
    <router-link
      v-for="(mode, index) in modeArray"
      :key="mode"
      :class="{
        active: $route.path.slice(1) === modeRoute[index],
        selector: true,
      }"
      :to="modeRoute[index]"
    >
      {{ mode }}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modeRoute: ["day", "week", "month", "year"],
      modeArray: ["日", "周", "月", "年"],
      selectedItem: "日",
    };
  },
  mounted() {
    console.log(this.$route.path.slice(1) == this.modeRoute[0]);
  },
  methods: {
    selectItem(mode) {
      this.selectedItem = mode;
    },
  },
};
</script>
<style scoped>
.CalendarSelector {
  display: flex;
  flex-direction: row;
  width: 16rem;
  border: rgb(223, 220, 221) solid 1px;
  border-radius: 0.5rem;
}
.active {
  background-color: rgb(223, 220, 221);
  border-radius: 0.5rem;;
}
.selector {
  flex: 1;
  border-radius: 0.1rem;
  padding: 0.1rem;
  cursor: pointer;
  color: rgb(172,169,170);
}
.selector:not(:last-child) {
  border-right: rgb(223, 220, 221) solid 1px;
}
</style>
