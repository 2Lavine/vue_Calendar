<template lang="">
  <div class="Nav">
    <CheckItemBoxCluster class="CheckItemBoxCluster"></CheckItemBoxCluster>
    <MiniCalendar class="MiniCalendar"></MiniCalendar>
  </div>
</template>
<script>
import CheckItemBoxCluster from "@/components/CheckItemBoxCluster.vue";
import MiniCalendar from "../components/MiniCalendar.vue";
export default {
  name: "Nav",
  components: {
    CheckItemBoxCluster,
    MiniCalendar,
  },
};
</script>
<style>
.Nav {
  width: 18vw;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: rgba(236, 233, 234);
}
.CheckItemBoxCluster,
.MiniCalendar {
  margin: 1.5rem;
}
</style>
