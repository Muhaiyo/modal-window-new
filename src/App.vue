<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
      @click="showDialog"
      style="margin: 15px 0;"
      >
      Создать пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>
<script>
import postForm from "@/components/postForm";
import postList from "@/components/postList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios'
export default {
  components: {
    MyButton,
    MyDialog,
    postForm, postList,
  },
  data(){
    return{
      posts:[],
      dialogVisible: false,
    }
  },
  methods:{
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
       this.posts = response.data;
      } catch (e) {
        alert ('ошибка')
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
*{
  margin: 0;
  padding-bottom: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}

</style>
