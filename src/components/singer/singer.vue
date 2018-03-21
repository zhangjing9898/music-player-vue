<template>
  <div class="singer" ref="singer">
    <listView @select="selectSinger" :data="singers" ref="list"></listView>
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
  import ListView from '../../base/listview/listview.vue'
  import {getSingerList} from '../../api/singer'
  import {ERR_OK} from '../../api/config'
  import Singer from '../../common/js/singer'
  import {mapMutations} from 'vuex';
  import {playlistMixin} from '../../common/js/mixin'

  const HOT_SINGER_LEN=10;
  const HOT_NAME='热门';

  export default {
    mixins:[playlistMixin],
    //data 是一个function
    data(){
      return {
        singers: []
      }
    },
    created(){
      this._getSingerList()
    },
    methods:{
        handlePlaylist(playlist){
          const bottom=playlist.length>0?'60px':''
          this.$refs.singer.style.bottom=bottom;
          this.$refs.list.refresh()
        },
        selectSinger(singer){
          console.log(singer.id);
          this.$router.push({
            path:`/singer/${singer.id}`
          })
          this.setSinger(singer);
        },
        _getSingerList(){
            getSingerList().then((res)=>{
                if(res.code===ERR_OK){
                    this.singers=this._normalizeSinger(res.data.list);
//                  console.log(this.singers);
                }
            })
        },
        _normalizeSinger(list){
            //map类似于键值对 key value形式
            let map={
                hot:{
                    title:HOT_NAME,
                    items:[]
                }
            }
            list.forEach((item,index)=>{
                if(index<HOT_SINGER_LEN){
                    map.hot.items.push(new Singer({
                      name:item.Fsinger_name,
                      id:item.Fsinger_mid
                    }))
                }
                const key=item.Findex;
                if(!map[key]){
                    map[key]={
                        title:key,
                        items:[]
                    }
                }
                map[key].items.push(new Singer({
                  name:item.Fsinger_name,
                  id:item.Fsinger_mid
                }))
            })
          //为了得到有序列表，我们需要处理map
           let ret=[];
           let hot=[];
           for(let key in map){
               let val=map[key];
               if(val.title.match(/[a-zA-Z]/)){
                   ret.push(val)
               }else if(val.title === HOT_NAME){
                   hot.push(val);
               }
           }
           //sort是在原生数组上进行操作，不生成副本。这里是A-Z排序
           ret.sort((a,b)=>{
               return a.title.charCodeAt(0)-b.title.charCodeAt(0);
           });
           return hot.concat(ret);
        },
      ...mapMutations({
        setSinger:'SET_SINGER'
      })
    },
    components:{
        ListView
    }

  }
</script>

<!--scoped实现私有化样式-->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
