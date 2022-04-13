<template>
    <h2 class="testimony-text">Recent Post</h2>
  <div class="blog__section">
      <div class="card" style="width: 22rem" v-for="post in blogPosts" :key="post">
          <router-link :to="{name: 'ViewPost', params:{id: post.id}}"><img src="../assets/images/crossblue.jpg" alt="" class="card-img"></router-link>
          <div class="card-body">
              <router-link :to="{name: 'ViewPost', params:{id: post.id}}"><h2 class="card-title">{{post.title}}</h2></router-link>
              <p class="card-text">{{post.body}}</p>
              <router-link :to="{name: 'ViewPost', params:{id: post.id}}" class="readMore">Read More</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            blogPosts: [],
        }
    },

    async created(){
        axios
        .get('http://127.0.0.1:8000/cpm_api/blog_posts/')
        .then(response => (this.blogPosts = response.data))
        .catch(error => console.log(error))
    },
}
</script>

<style lang="scss" scoped>
    .blog__section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 0;
        margin-top: -20px;
        

        .card{
            min-height: 100vmin;
            box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px rgb(211, 209, 209);
            margin-bottom: 30px;

            &-title{
                font-family: $heroText;
                font-weight: 600;
                color: darken($primaryColor, 70%);
                font-size: 1.7rem;
                word-spacing: .1ch;
                letter-spacing: 1px;
                margin-bottom: 20px;
            }

            &-text{
                font-family: $paragraphText;
                font-weight: 600;
                color: $defaultBlack;
                font-size: 1.1rem;
                line-height: 27px;
                word-spacing: .1ch;
                opacity: .77;
                margin-bottom: 30px;
            }

            a{
                font-size: 1.3rem;
                word-spacing: .2ch;
                font-family: $buttonCta;
                color: $secondaryColor;
                font-weight: bold;
            }
        }

    }

</style>