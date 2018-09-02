<template>
    <div class="page">
        <ul class="quick-nav">
            <li v-for="item in homeShow" :key="item.id">
                <router-link :to="item.path">{{item.title}}</router-link>
            </li>
        </ul>
        <section class="recommend-feed">
            <ul class="feed-section"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="50">
                <li class="feed-item" v-for="item in recommend_feeds" :key="item.id" @click="toDetail(item.target.id)">
                    <div class="feed-content">
                        <div class="text">
                            <h3>{{item.title}}</h3>
                            <p>{{item.target.desc}}</p>
                        </div>
                        <div class="imgUrl">
                            <img :src="item.target.cover_url" alt="loading">
                        </div>
                    </div>
                    <div class="feed-author">
                        by&nbsp;
                        <span>{{item.target.author.name}}</span>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import Vue from "vue"
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
    data(){
        return {
            homeShow: [],   //首页nav
            recommend_feeds: [],    //首页列表内容
            dateNow: '',  //参数，时间
            loading: false,
            next_date: new Date().getDate() + 1,
            dist: 20,
            loading: false,
        }
    },
    created() {
        this.loadMore();
        // 从store中取到数据
        this.homeShow = this.$store.state.homeShow;
    },
    methods: {
        loadMore() {
            this.loading = true;    //loading为true不会触发滚动     
            console.log(this.loading)       
            this.dateNow = this.format(this.next_date)
            let params = {
                alt: 'json',
                next_date: this.dateNow,
                loc_id: 108288,
                gender: '',
                birthday: '', 
                udid: '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
                for_mobile: 1,
            }
            this.$api.douban.dbHome(params).then(res => {
                this.recommend_feeds = this.recommend_feeds.concat(res.data.recommend_feeds)
                // this.loading = false;
                // if(!this.loading){
                //     this.next_date -= 1
                //     if(this.next_date == 0){
                //         this.next_date = 28;
                //     }
                // }
            })
        },
        // 进入详情页
        toDetail(id){
            //  编程式导航，路由传参，也可使用query传参，但是要以path匹配
            this.$router.push({name: 'listDetail', params: {id: id}})
        }
    }
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
.page{
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden;

    .quick-nav{
        overflow: hidden;
        margin: rem(20px) 0 0 0;
        padding-top: rem(6px);
        font-size: rem(15px);
        margin: 0 rem(18px);

        li{
            float: left;
            width: 50%;
            padding: rem(3px);
            box-sizing: border-box;
            font-size: rem(15px);

            a{
                background-color: #f6f6f6;
                color: #494949;
                display: block;
                text-align: center;
                line-height: rem(20px);
                padding: rem(12px) 0;
                border-radius: rem(2px);
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }
        }
    }

    .recommend-feed{
        margin-right: -18px;
        margin-left: -18px;
        margin-top: 2px;
        min-height: 480px;
        color: #494949;
        margin: 0 rem(18px);

        .feed-item{
            padding: 25px 18px 25px 0;
            position: relative;
            color: #494949;

            .feed-content{
                overflow: hidden;
                margin-bottom: 10px;

                .text{
                    float: left;
                    width: 66%;
                    h3{
                        text-align: justify;
                        font-size: 17px;
                        font-weight: 500;
                        color: #494949;
                        margin-bottom: 6px;
                    }

                    p{
                        overflow: hidden;
                        text-align: justify;
                        color: #aaa;
                        font-size: 12px;
                        line-height: 1.5;
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                    }
                }

                .imgUrl{
                    float: right;
                    position: relative;
                    width: 86.83px;
                    height: 86.83px;
                    // margin-top: -79px;
                    img{
                        width: 100%;
                    }
                }

            }

            .feed-author{
                font-size: 12px;
                color: #ccc;

                span{
                    color: #ccc;
                }
            }
        }
    }
}
</style>