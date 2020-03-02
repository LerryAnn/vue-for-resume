<template>
  <div class="home">
    <MyInfo />
  </div>
</template>

<script>
import MyInfo from "@/components/MyInfo";
export default {
  components: {
    MyInfo
  }
};
</script>
<style lang="stylus" scoped>
.home {
  height: calc(100vh - 160px);
  min-height: 350px;
  display: box;
  box-pack: center;
  box-orient: vertical;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-orient: vertical;
}
</style>