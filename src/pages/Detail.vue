<template>
  <div class="detail">
    <div v-for="item in projectDetailList" :key="item.index">
      {{item.title}}
    </div>
    
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  beforeMount(){
    this.getProjectId(this.$route.params.id)
  },
  methods:{
    ...mapMutations([
      'getProjectId'
    ])
  },
  computed:{
    ...mapState({
      projectDetailList:state=>state.projectDetailList.filter(item=> item.index===Number(state.projectId))
    })
  }
}
</script>

<style lang='stylus' scoped>
.detail{
  min-height: calc(100vh - 160px);
}
</style>