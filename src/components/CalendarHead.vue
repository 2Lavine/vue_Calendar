<template>
  <div class="CalendarHead">
    <div>{{ year }}年{{ month }}月</div>
  </div>
</template>
<script>
export default {
  props: ["year", "month"],
};
</script>
<style>
.CalendarHead {
  font-size: 2rem;
  font-weight: bolder;
  margin: 1.5rem;
}
</style>
