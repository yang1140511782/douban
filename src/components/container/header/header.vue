<template>
    <div class="header display-inline padding-18">
        <router-link to="/home" class="douban-title">
            <h1>豆瓣</h1>
        </router-link>    
        <ul class="navbar">
            <li v-for="item in navbar" :key="item.id">
                <router-link :to="item.path">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navbar: []
        }
    },
    created() {
        this.navbar = this.$store.state.navbar
    },
    methods: {
        toHotMovie(){
            this.$router.push('/film/hotMovie')
        }
    }
}
</script>

<style lang="scss">
@import '@/style/mixin.scss';
$sc: 16;
.header{
    height: rem(47px);
    width: 100%;

    .douban-title{
        width: rem(100px);
        float: left;
        height: rem(47px);
        line-height: rem(47px);

        h1{
            color:#42bd56;
            font-size: rem(24px);
            font-weight: 600;
        }
    }

    .navbar{
        width: rem(220px);
        display: flex;
        justify-content: space-around;
        float: right;
        height: rem(47px);
        line-height:rem(36px);

        a{
            color:#9F7860;
            font-size: rem(17px)
        }
        .router-link-active{
            color:#2384E8;
        }
    }
}
</style>