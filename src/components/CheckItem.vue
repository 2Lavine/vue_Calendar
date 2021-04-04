<template lang="">
    <div>
        <input type="checkbox"/>
        <label for="">{{userTag}}</label>
    </div>
</template>
<script>
export default {
  name: "CheckItem",
  props: {
    userTag: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
input {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>