<template>
  <div class="singer" ref="singer">
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
  import {getSingerList} from '../../api/singer'
  import {ERR_OK} from '../../api/config'

  export default {

    //data 是一个function
    data(){
      return {
        singers: []
      }
    },
    created(){

    },
    methods:{
        _getSingerList(){
            getSingerList().then((res)=>{
                if(res.code===ERR_OK){
                    this.singers=res.data.list
                }
            })
        }
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
