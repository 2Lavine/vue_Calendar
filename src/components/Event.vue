<template>
  <div :style="eventStyle" class="Event">
    {{ content }}
  </div>
</template>
<script>
export default {
  name: "Event",
  props: ["color"],
  data() {
    return {
      content: "hello world",
      eventStyle: {
        "background-color": "rgba(" + this.color + ",0.5)",
        "border-left": "rgb(" + this.color + ")solid 0.25rem",
      },
    };
  },
};
</script>
<style>
.Event {
  padding: 0;
  height: 100%;
  border-radius: 0.5rem;
}
</style>
