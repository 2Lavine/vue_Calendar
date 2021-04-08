<template>
  <div class="home">
    <Nav></Nav>
    <Calendar class="Calendar"></Calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Calendar,
  },
};
</script>
<style>
.home {
  display: flex;
}
.Calendar {
  flex: 1;    
}
</style>
