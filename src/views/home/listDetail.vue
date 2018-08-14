<template>
    <div>
        详情
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        },
        created () {
            this.getListDetail()
        },
        methods: {
            getListDetail(){
                //接受参数
                let id = this.$route.params.id
                this.$http.get('db/rexxar/api/v2/note/' + id ).then(res => {
                    console.log(res.data)
                })
            }
        }
    }    
</script>

<style>

</style>

