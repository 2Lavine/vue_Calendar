<template>
  <div
    :style="eventStyle"
    class="Event"
    @mousedown="selectEvent"
    @mouseup="completeResize"
    @mousemove="resizeEvent"
  >
    <div class="content">{{ content }}</div>
  </div>
</template>
<script>
export default {
  name: "Event",
  props: ["color", "height", "index"],
  data() {
    return {
      resizeClick: {
        begin: "",
        end: "",
      },
      content: "hello world",
      eventStyle: {
        "background-color": "rgba(" + this.color + ",0.5)",
        "border-left": "rgb(" + this.color + ")solid 0.25rem",
        height: this.height,
      },
    };
  },
  methods: {
    selectEvent(event) {
      if (event.target.className == "Event") {
        console.log(this.index, event.target);
        this.resizeClick.begin = event.layerY;
      }
    },
    resizeEvent(event) {
      if (event.target.className == "Event") {
        // console.log(event);
      }
    },
    completeResize(event) {
      if (event.target.className == "Event") {
        console.log(233);
      }
    },
  },
};
</script>
<style>
.Event {
  padding: 0;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: row-resize;
}
.content {
  cursor: default;
  height: 80%;
  margin: 0.5rem 0;
}
</style>
