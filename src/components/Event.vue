<template>
  <div :style="eventStyle" class="Event">
    <div
      class="topBorder"
      draggable="true"
      @dragstart="selectEvent"
      @drag="resizeTopEvent"
      @dragend="completeResize"
    ></div>

    <div v-show="!isEditing" class="content" @click="editContent">
      {{ content }}
    </div>
    <input
      v-show="isEditing"
      :id="'editor' + id"
      class="editor"
      contenteditable="true"
      :value="content"
      @keyup.enter="showContent"
      @blur="showContent"
    />

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
// import Vue from vue;
export default {
  name: "Event",
  props: ["color", "height", "index", "top", "id"],
  data() {
    return {
      resizeClick: {
        begin: "",
        end: "",
      },
      isEditing: false,
      content: "hello world",
      eventStyle: {
        "background-color": "rgba(" + this.color + ",0.5)",
        "border-left": "rgb(" + this.color + ")solid 0.25rem",
        height: this.height,

        top: this.top,
      },
      clickTime: {
        now: 0,
        last: 0,
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
    editContent(event) {
      this.clickTime.now = event.timeStamp;
      if (this.clickTime.last != 0) {
        if (this.clickTime.now - this.clickTime.last < 1000) {
          this.isEditing = true;
          this.$nextTick(function () {
            document.getElementById(`editor${this.id}`).focus();
          });
        }
      }
      this.clickTime.last = event.timeStamp;
    },
    showContent() {
      // console.log(event.value, event);
      console.log(
        document.getElementById(`editor${this.id}`),
        `editor${this.id}`
      );
      this.content = document.getElementById(`editor${this.id}`).value;
      this.isEditing = false;
    },
  },
};
</script>
<style>
.Event {
  position: absolute;
  padding: 0;
  width: 82rem;
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
.editor {
  width: 80%;
  flex: 1;
  margin: 0 auto;
}
</style>
