<template lang="">
    <div class="CheckItemBox">
    <titles class="tagTitle"> {{title}}</titles>    
     <CheckItem v-for="userTag in userTags" :userTag="userTag" :key="userTag" class="CheckItem"></CheckItem>
    </div>
</template>
<script>
import CheckItem from '@/components/CheckItem.vue'
export default {
    props:['title', 'userTags'],
    components:{
        CheckItem,
    }
}
</script>
<style >
    .CheckItemBox {
        background-color: red;
        display: flex;
        flex-direction: column;
        /* justify-content:left; */
        align-items:flex-start;
    }
    .tagTitle {
        font-size:1.25rem
    }
</style>