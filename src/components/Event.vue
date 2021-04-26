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
  props: ["color", "height", "index", "top"],
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
        top: this.top,
      },
    };
  },
  methods: {
    selectEvent(event) {
      if (event.target.className == "Event") {
        this.tag = true;
      }
    },
    resizeEvent(event) {
      if (event.target.className == "Event" && this.tag) {
        console.log(event);
        this.eventStyle.height = "8rem";
      }
    },
    completeResize(event) {
      if (event.target.className == "Event") {
        this.tag = false;
      }
    },
  },
};
</script>
<style>
.Event {
  position: absolute;
  padding: 0;
  width: 90rem;
  left: 5rem;
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
