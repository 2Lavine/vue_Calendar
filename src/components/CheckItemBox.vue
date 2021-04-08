<template lang="">
  <div class="CheckItemBox">
    <p class="tagTitle">{{ title }}</p>
    <CheckItem
      v-for="userTag in userTags"
      :userTag="userTag"
      :key="userTag"
      class="CheckItem"
    ></CheckItem>
  </div>
</template>
<script>
import CheckItem from "@/components/CheckItem.vue";
export default {
  name: "CheckItemBox",
  props: ["title", "userTags"],
  components: {
    CheckItem,
  },
};
</script>
<style>
.CheckItemBox {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* justify-content:left; */
  align-items: flex-start;
  margin-top: 5px;
}
.tagTitle {
  text-indent: 0.25rem;
  font-size: 1.25rem;
  color: rgba(172,169,170);
}
</style>
