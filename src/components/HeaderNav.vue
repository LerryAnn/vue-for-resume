<template>
  <div class="headerNav" @click.stop>
    <!-- <div class="logo">
      <img :src="logo" alt />
    </div>-->
    <ul>
      <li v-for="item in navList" :key="item.index" @click.stop="checkNav(item.index)">
        <router-link
          v-if="item.myLink"
          :to="item.link"
          :class="activeNav===item.index?'active':''"
        >{{item.text}}</router-link>
        <a v-else :href="item.link" target="_blank">{{item.text}}</a>
      </li>
    </ul>
    <div class="navbtn" :class="showNav?'show':''" @click.stop="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      logo
    };
  },
  methods: {
    ...mapMutations(["toggleNav", "checkNav"])
  },
  computed: {
    ...mapState({
      activeNav: state => state.activeNav,
      showNav: state => state.showNav,
      navList: state => state.navList
    })
  }
};
</script>

<style lang="stylus" scoped>
$fontColor = #fff;
$background = #000;
$height = 50px;

.headerNav {
  background: $background;
  height: $height;
  line-height: $height;
  transition: all 1s;
  width: 100%;
  padding: 0 5%;

  .logo {
    float: left;
    height: $height;

    img {
      height: 100%;
      border-radius: 50%;
    }
  }

  ul {
    display: flex;
    max-width: 500px;
    margin-right: 0;
    margin-left: auto;

    li {
      flex: 1;
      text-align: center;
      cursor: pointer;

      a {
        color: $fontColor;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 1rem;

        &::after {
          content: '';
          display: block;
          background: rgb(247, 152, 23);
          height: 0px;
          width: 0px;
          z-index: 999999;
          position: relative;
          bottom: 10px;
          left: 50%;
          transition: all 0.3s;
          transform: translate(-50%);
        }

        &:hover::after {
          width: 40px;
          height: 2px;
        }
      }

      .active::after {
        width: 40px;
        height: 2px;
      }
    }
  }
}

@media screen and (min-width: 415px) {
  .headerNav {
    top: 0;
    left: 0;
    z-index: 99;
    background: transparent;

    ul>li>a {
      color: #000;
    }

    &:hover {
      background: $background;
    }

    &:hover ul>li>a {
      color: #fff;
    }
  }
}

@media screen and (max-width: 415px) {
  .headerNav {
    overflow-y: hidden;

    ul {
      display: block;
      position: fixed;
      right: -120px;
      top: 0px;
      padding-top: 60px;
      background: #ccc;
      height: 100%;
      width: 120px;
      transition: all 0.3s;
      z-index: 999;
    }

    ul.show {
      right: 0px;
    }

    .navbtn {
      position: relative;
      right: 0px;
      float: right;
      top: 10px;
      z-index: 9999;

      span {
        display: block;
        height: 2px;
        width: 30px;
        margin: 6px;
        background: #fff;
        transition: all 0.3s;
        z-index: 999999;
        transform-origin: 14%;
      }
    }

    .show>span:first-child {
      transform: rotateZ(45deg);
    }

    .show>span:nth-child(2) {
      opacity: 0;
    }

    .show>span:last-child {
      transform: rotateZ(-45deg);
    }
  }
}
</style>