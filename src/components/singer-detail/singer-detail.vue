<template>
  <transition name="slide">
    <div class="singer-detail">12212</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import {getSingerDetail} from '../../api/singer'
  import{ERR_OK} from '../../api/config'
  export default{
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created(){
        this._getDetail();
      console.log(this.singer)
    },
    methods:{
        _getDetail(){
            if(!this.singer.id){
                this.$router.push('/singer')
                return
            }
            getSingerDetail(this.singer.id).then((res)=>{
                if(res.code===ERR_OK){
                    console.log(res.data.list)
                }
            })
        }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"

  .singer-detail
    postion:fixed
    background-color black
    z-index:100
    top:0
</style>
