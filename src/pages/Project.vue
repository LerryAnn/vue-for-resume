<template>
  <div class="project">
    <ProSwiper />
    <div class="textMain">
      <h1 class="title">{{title}}</h1>
      <p class="content">{{content}}</p>
    </div>
    <div class="productMain">
      <div class="productItem" v-for="item in itemList" :key="item.index">
        <div class="itemLogo">
          <img :src="item.imageUrl" alt />
        </div>
        <div class="itemText four-line">
          <h2>
            <!-- <a target="_blank" :href="item.url"> -->
            {{item.title}}
            <!-- </a> -->
          </h2>
          <p class="itemP">{{item.text}}</p>
          <!-- <DetailBtn :option="buttonOptionList[item.index]" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProSwiper from "@/components/ProjectSwiper";
import DetailBtn from "@/components/DetailBtn";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      title: state => state.title,
      content: state => state.content,
      itemList: state => state.itemList,
      buttonOptionList: state => state.buttonOptionList
    })
  },
  // methods: {
  //   goDetail(index) {
  //     this.$router.push({ name: "Detail", params: { id: index } });
  //   }
  // },
  components: {
    ProSwiper,
    DetailBtn
  }
};
</script>

<style lang='stylus' scoped>
.project {
  min-height: calc(100vh - 160px);

  .textMain {
    max-width: 768px;
    margin: 30px auto;

    .title {
      text-align: center;
      margin-bottom: 10px;
      font-size: 1.2rem;

      &:after {
        content: '';
        display: block;
        height: 3px;
        width: 2rem;
        background: rgb(198, 216, 18);
        margin: 5px auto 0px;
      }
    }

    .content {
      padding: 0 2rem;
      text-align: justify;
      text-indent: 2rem;
    }
  }

  .productMain {
    padding: 0 2rem;
    max-width: 768px;
    margin: 0 auto 30px;

    .productItem {
      display: flex;
      padding: 20px 0;
      // min-height: 170px;
      border-bottom: 1px solid #ccc;
     
      .itemLogo {
        flex: 3;

        img {
          position: relative;
          top: 50%;
          left: 50%;
          width: 70%;
          height: auto;
          background: #fff;
          transform: translate(-50%, -50%);
        }
      }

      .itemText {
        flex: 7;
        text-align: justify;
        text-indent: 2rem;

        h2 {
          text-indent: 0rem;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        // p{
        //   min-height calc(100% - 60px)
        // }
      }
    }
  }
}
</style>