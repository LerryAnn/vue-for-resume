<template>
  <button class="goTop" :class="none===true?'none':''" @click.stop="goTop"></button>
</template>

<script>
export default {
  data() {
    return {
      none: true
    };
  },
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  beforeMount() {
    window.onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        this.$data.none = false;
      } else {
        this.$data.none = true;
      }
    };
  },
};
</script>

<style lang='stylus' scoped>
.goTop {
  position: fixed;
  transition: all 1s;
  right: 1rem;
  bottom: 1rem;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  border: none;
  background: url('../assets/images/gotop.png') no-repeat center center;
  background-size: 100% auto;
  outline: none;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
}

@media screen and (max-width: 415px) {
  .goTop {
    opacity: 1;
  }
}
</style>