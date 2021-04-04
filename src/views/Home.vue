<template>
  <div class="home">
    <Nav></Nav>
    <mini-calendar></mini-calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import MiniCalendar from "../components/MiniCalendar.vue";

export default {
  name: "Home",
  components: {
    Nav,
    MiniCalendar,
  },
};
</script>
