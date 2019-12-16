<template>
  <div>
    <h1>{{ goodId }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'GoodDetail',
        data() {
            return {
                goodId:'',
            }
        },
        methods: {
            get_id(){
                this.goodId = this.$route.params.goodId;
            }
        },
        mounted(){
            this.get_id();
        }
    }
</script>

<style scoped>
    
</style>