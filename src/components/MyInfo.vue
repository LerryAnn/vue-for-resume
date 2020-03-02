<template>
  <div class="myInfo">
    <div class="logo">
      <img :src="header" alt />
    </div>
    <div class="info">
      <h1 class="authorName">{{name}}</h1>
      <div class="contact">
        <span class="phone">
          {{phone}}
          <b>(微信同号)</b>
        </span>
        <span class="mail">{{mail}}</span>
      </div>
      <div class="introduce">{{summary}}</div>
      <div class="tags">
        <span v-for="tag in tagsList" :key="tag">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["getUserList"])
  },
  computed: {
    ...mapState({
      header: state => state.header,
      userList: state => state.userList,
      name: state => state.name,
      phone: state => state.phone,
      mail: state => state.mail,
      summary: state => state.summary,
      tagsList: state => state.tagsList
    })
  }
};
</script>

<style lang='stylus' scoped>
b {
  font-size: 0.5rem;
}

.myInfo {
  text-align: center;

  .logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 30px;
    line-height: 80px;

    img {
      vertical-align: middle;
      width: 100%;
      border-radius: 50%;
    }
  }

  .info {
    .authorName {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .contact {
      span {
        display: inline-block;
        margin-right: 1rem;
        margin-bottom: 1rem;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: left center;
        text-indent: 1.5rem;
      }

      .phone {
        background-image: url('../assets/images/phone.png');
      }

      .mail {
        background-image: url('../assets/images/mail.png');
      }
    }
  }

  .introduce {
    margin-bottom: 1rem;
  }

  .tags {
    width: 50%;
    min-width: 320px;
    margin: 0 auto 10px;
    text-align: left;

    span {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      background: lightblue;
      color: #fff;
      border-radius: 5px;
      margin: 0 1em 0.5rem;

      &:hover {
        box-shadow: 0 1px 4px 0px #999;
      }
    }
  }
}
</style>