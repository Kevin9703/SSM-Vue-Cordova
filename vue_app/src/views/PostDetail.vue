<template>
  <h1>{{ postId }}</h1>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                postId:'',
            }
        },
        mounted(){
            this.get_id();
        },
        methods: {
            get_id(){
                this.postId = this.$route.params.postId;
            }
        },
    }
</script>

<style lang="" scoped>
    
</style>