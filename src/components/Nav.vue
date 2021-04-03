<template lang="">
    <div class="Nav">
     <CheckItemBox v-for="userTagsInfo in userTags" :key="userTagsInfo.userTagsTitle" :title="userTagsInfo.userTagsTitle" :userTags="userTagsInfo.userTags"></CheckItemBox>
    </div>
</template>
<script>
import CheckItemBox from '@/components/CheckItemBox.vue'
export default {
    data() {
        return {
            userTags:[{
                userTagsTitle:'just just',
                userTags:['one','two','three']
            }]
        }
    },
    components:{
        CheckItemBox,
    }
}
</script>
<style >
    .Nav {
        width: 20vw;
        min-width: 200px;
    }
</style>