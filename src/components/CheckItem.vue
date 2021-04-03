<template lang="">
    <div>
        <input type="checkbox"/>
        <label for="">{{userTag}}</label>
    </div>
</template>
<script>
export default {
    props:{
        userTag:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    input {
        margin-right: 10px;
    }
</style>