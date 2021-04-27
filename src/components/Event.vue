<template>
  <div
    :style="eventStyle"
    class="Event"
    @mousedown="selectEvent"
    @mouseup="completeResize"
    @mousemove="resizeEvent"
  >
    <div></div>
    <div class="content">{{ content }}</div>
    <div></div>
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
        this.layerY = event.layerY;
      }
    },
    resizeEvent(event) {
      if (this.tag) {
        let rem = window
          .getComputedStyle(document.documentElement)
          .fontSize.slice(0, -2);
        // console.log(event, rem);
        this.eventStyle.height =
          this.height.slice(0, -3) * rem + event.layerY - this.layerY + "px";
      }
    },
    completeResize(event) {
      console.log("here we go", event);
      this.tag = false;
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
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
}
.content {
  cursor: default;
  height:90%;
  margin: 3px 0;
}

</style>
