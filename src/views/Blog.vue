<template>
    <header class="sermonHero">
      <h2 class="sermonText">Blog</h2>
    </header>
  <div class="blog__section">
      <div class="card" style="width: 22rem" v-for="post in blogPost" :key="post">
          <img src="../assets/images/crossblue.jpg" alt="" class="card-img">
          <div class="card-body">
              <h2 class="card-title">{{post.title}}</h2>
              <p class="card-text">{{post.body}}</p>
              <router-link to="/" class="readMore">Read More</router-link>
          </div>
      </div>
        <Footer />
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Footer from '@/components/Footer.vue'
export default {
    components: {Footer},
    data(){
        return{}
    },

    setup(){
        const { blogPost, error, load } = getPosts()
        load()
        
        return { blogPost, error }
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
                font-size: 2.1rem;
                word-spacing: .1ch;
                letter-spacing: 1px;
                margin-bottom: 30px;
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