<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <input type="text" v-model="modificatorValue">
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
export default {
  components: {
    MyButton,
    MyDialog,
    postForm, postList
  },
  data(){
    return{
      posts:[
        {id: 1, title: " Java Script 1", body: "Описание 1"},
        {id:2, title:" Java Script 2",body:"Описание 2"},
        {id:3, title:" Java Script 3",body:"Описание 3"},
      ],
      dialogVisible: false,
      modificatorValue:''
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
    }
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
