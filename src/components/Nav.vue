<template lang="">
  <div class="Nav">
    <CheckItemBox
      v-for="userTagsInfo in allUserTagsInfo"
      :key="userTagsInfo.userTagsTitle"
      :title="userTagsInfo.userTagsTitle"
      :userTags="userTagsInfo.userTags"
    ></CheckItemBox>
    NAV
  </div>
</template>
<script>
import CheckItemBox from "@/components/CheckItemBox.vue";
export default {
  name: "Nav",
  data() {
    return {
      allUserTagsInfo: [
        {
          userTagsTitle: "just just",
          userTags: ["one", "two", "three"],
        },
        {
          userTagsTitle: "just jt",
          userTags: ["one", "two", "three"],
        },
      ],
    };
  },
  components: {
    CheckItemBox,
  },
};
</script>
<style>
.Nav {
  width: 15vw;
  min-width: 200px;
}
</style>
