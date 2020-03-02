<template>
  <div id="app" :class="showNav===true?'show':''" @click.stop="hidNav">
    <HeaderNav />
    <transition :name="transitionName">
      <router-view />
    </transition>
    <Footer />
    <GoTop />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-fade"
    };
  },
  components: {
    HeaderNav,
    Footer,
    GoTop
  },
  methods: {
    ...mapMutations(["hidNav"])
  },
  computed: {
    ...mapState({
      showNav: state => state.showNav
    })
  }
};
</script>

<style lang='stylus'>
* {
  margin: 0px;
  padding: 0px;
  color: #2c3e50;
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-decoration: none;
  box-sizing: border-box;
  user-select: none;
}

html, body {
  background: #eee;
  min-width: 320px;
  overflow-x: hidden;
}

ul, ol, li {
  list-style: none;
}

#app {
  transition: all 0.3s;
}

#app.show {
  transform: translate(-120px);
}

.none {
  display: none;
  opacity: 0;
}

.four-line {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

.clear:after {
  content: '';
  display: block;
  clear: both;
  overflow:hidden;
  width:0;
  height:0;
}
</style>
