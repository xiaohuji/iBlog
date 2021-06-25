<template>
  <div class="list-wrapper">
    <ul class="list-container" id="list-ul">
      <li v-for="item in contentList" :key="item.objectId">
        <router-link :to="{ name: 'article', params: {id: item.objectId}}">
          <!-- <a v-link="{ name: 'article', params: {id: item._id}}"> -->
          <p class="list-title">{{item.title}}</p>
          <p class="list-updated">作者：{{item.username}}</p>
          <p class="list-updated">{{item.createdAt}}</p>
          <p class="list-abstract">{{item.abstract}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
// import { contentList } from '../store/getters'
// import { updateHeadline } from '../store/actions'
// import { getContentList } from '../store/actions'
import { mapGetters, mapActions } from 'vuex'

export default {
  // data () {
  //   return {
  //     items: ''
  //   }
  // },
  methods: {
    ...mapActions(['getContentList', 'updateHeadline'])
  },
  computed: {
    ...mapGetters(['contentList'])
  },
  // vuex: {
  //   getters: {
  //     items: contentList
  //   }
  // },
  created () {
    this.getContentList()
    console.log(this.contentList)
    // this.getList()
    // this.$store.dispatch('getContentList')
    this.updateHeadline('博客')
  }
}
</script>

<style>
  .list-container li {
    border-bottom: 1px solid #eee;
  }

  .list-title {
    font-size: 2.6rem;
    font-weight: 400;
    color: #404040;
    margin-top: 0;
  }

  .list-abstract {
    font-size: 1.6rem;
    color: #919191;
    font-weight: 300;
  }

  .list-updated {
    font-family: "Comic Sans MS", curslve, sans-serif;
    font-size: 1.8rem;
    color: #8b8b8b;
    padding: 5px 0;
  }

  .list-container li a {
    padding: 1rem 1.5rem;
    display: block;
    transition: all .3s;
    margin:0;
  }

  .list-container li a:hover {
    background-color: Rgba(0, 0, 0, .02);
  }

  @media screen and (max-width: 768px) {
    .list-title {
      font-size: 2.2rem;
    }

    .list-updated {
      font-size: 1.6rem;
    }
  }
</style>
