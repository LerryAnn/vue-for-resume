<template>
  <div class="detailBtn">
    <button @click="buttonClick(option.index)">{{option.content}}</button>
  </div>
</template>

<script>
export default {
  props: ["option"],
  methods: {
    buttonClick(index) {
      this.$router.push({ name: "Detail", params: { id: index } });
    }
  }
};
</script>

<style lang='stylus' scoped>
.detailBtn {
  text-indent: 0px;
  padding: 0 1rem;
  min-width: 3rem;
  text-align: right;

  button {
    padding: 0.1rem 0.5rem;
    min-width: 3rem;
    border: none;
    background: #f79817;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 0px 1px #f7580c;
    cursor: pointer;
  }
}
</style>