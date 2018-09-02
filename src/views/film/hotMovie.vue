<template>
    <div>
        <h1 class="h1">热映电影</h1>
        <ul class="grid"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="20">

            <li class="item" v-for="(item, index) in hotMovieList" :key="index">
                <div class="item-img">
                    <img :src="item.cover.url" alt="">
                </div>
                <div class="item-info">
                    <p class="title">{{item.title}}</p>
                    <p class="rate">
                        <i class="iconfont icon-star"></i>
                        {{item.rating == null ? '暂无评分' : item.rating.value}}
                        </p>
                </div>
            </li>
        </ul>  
    </div>
</template>

<script>
import Vue from 'vue';
import { InfiniteScroll, Toast } from 'mint-ui';
Vue.use(InfiniteScroll);
    export default{
        data(){
            return {
                hotMovieList: [],   //电影列表
                start: 0,           //起始页数，每次请求增加18
                total: null,        //总的电影数
                value:3.5,           //星星评价
                loading: false,
                hasMore: true,
            }
        },
        created(){
            
        },
        methods: {
            loadMore(){
                if(!this.hasMore){
                    return;
                }
                let temer = Toast({
                    message: 'loading',
                    iconClass: 'fa fa-spinner',
                    duration: -1
                });
                this.loading = true
                let params = {
                    for_mobile: 1,
                    start: this.start,
                    count: 18,
                    loc_id: 108288,
                }
                console.log(params)
                this.$api.douban.HotMovie(params).then( res => {
                    let data = res.data;
                    this.hotMovieList = this.hotMovieList.concat(data.subject_collection_items);
                    this.hasMore = Boolean(this.start < data.total)
                    this.start += this.hasMore ? 18 : 0;
                    this.loading = false
                    temer.close()
                })
                
            },
        }
    }
</script>

<style lang="scss">
@import '@/style/common.scss';
@import '@/style/mixin.scss';
.grid{
    padding: rem(20px) 0;
    margin-left: auto;
    margin-right: auto;
    max-width: rem(660px);
    overflow: hidden;
    box-sizing: border-box;

    .item{
        float: left;
        box-sizing: border-box;
        width: 33.33333%;
        height: rem(175px);
        padding-left: 4%;
        padding-right: 4%;
        margin-bottom: 20px;
        overflow: hidden;

        .item-img{
            min-height: 87px;
            height: 130px;
            overflow: hidden;
            position: relative;

            img{
                width: 100%;
            }
        }

        .item-info{
            height: 45px;
            overflow: hidden;

            .title{
                font-size: 13px;
                font-weight: normal;
                padding: 5px 0 0;
                color: #494949;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            .rate{
                font-size:12px;
            }
            
        }
    }
}

.mint-toast-text{
    color: azure !important;
}
</style>