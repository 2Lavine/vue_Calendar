<template>
  <div :style="eventStyle" class="Event">
    <div
      class="topBorder"
      draggable="true"
      @dragstart="selectEvent"
      @drag="resizeTopEvent"
      @dragend="completeResize"
    ></div>
    <div class="content">{{ content }}</div>
    <div
      class="bottomBorder"
      draggable="true"
      @dragstart="selectEvent"
      @drag="resizeBottomEvent"
      @dragend="completeResize"
    ></div>
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
      // if (event.target.className == "Event") {
      this.tag = true;
      this.layerY = event.layerY;
      console.log("start");
      // }
    },
    resizeTopEvent(event) {
      if (this.tag) {
        if (event.clientY !== 0) {
          this.eventStyle.top =
            +this.eventStyle.top.slice(0, -2) +
            event.layerY -
            this.layerY +
            "px";
          this.eventStyle.height =
            +this.eventStyle.height.slice(0, -2) -
            event.layerY +
            this.layerY +
            "px";
          this.layerY = event.layerY;
        }
      }
    },
    resizeBottomEvent(event) {
      // console.log(event);
      if (this.tag) {
        // let rem = window
        //   .getComputedStyle(document.documentElement)
        //   .fontSize.slice(0, -2);

        /*
        每次 drag 释放完之后都会有一个 clientY,clientX =0的event事件... 不知道是用来干什么的
       */
        if (event.clientY !== 0) {
          this.eventStyle.height =
            +this.eventStyle.height.slice(0, -2) +
            event.layerY -
            this.layerY +
            "px";
          this.layerY = event.layerY;
        }
        // remway  this.height.slice(0, -3) * rem + event.layerY - this.layerY + "px";
      }
    },
    completeResize(event) {
      console.log("here we go", event);
      this.tag = false;
      this.layerY = event.layerY;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.content {
  cursor: default;
  flex: 1;
  margin: 3px 0;
}
.topBorder {
  height: 5px;
}
.bottomBorder {
  height: 5px;
}
</style>
