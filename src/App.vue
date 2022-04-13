<template name="page-animation">  
    <div id="app" class="d-flex flex-column min-vh-100">
      <Navigation v-if="!navigationDisabled"/>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.fullPath">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div> 
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Navigation,
  },

  beforeCreate(){
    this.$store.commit('initializeStore')

    const token = this.$store.state.user.token
    if(token){
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common["Authorization"] = ""
    }

    if (this.$store.state.token){
      axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
    } else {
      axios.defaults.headers.common["Authorization"] = ""
    }
  },

  created(){
    this.routeSmartWatch();
  },

  data(){
    return{
      navigationDisabled: null,
    }
  },

  methods: {
    routeSmartWatch(){
      if(this.$route.name === "Register" || 
        this.$route.name === "Login" || 
        this.$route.name =="ForgotPassword" ||
        this.$route.name =="Page404") 
      {
        this.navigationDisabled = true;
        return;
      }
      this.navigationDisabled = false;
    }
  },

  watch: {
    $route(){
      this.routeSmartWatch();
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/rootstyle.scss";

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  


  .slide-leave-active{
    transition: 1s;
  }
  .slide-enter{
    transform: translateX(100);
  }
  .slide-enter-to{
    transform: translateX(0);
  }
  .slide-leave-to{
    transform: translate(-100%, 0);
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $defaultFontSize;
  min-height: 100%;
  position: relative;
}

body{
  margin: 0px !important;
  padding: 0px !important;
  box-sizing: border-box;
  background: lighten($primaryColor, 47%);
  min-height: 100%;
  position: relative;
  overflow-x: hidden !important;
}

.bringToFront{
  z-index: 1 !important;
}

h1,h2,h3,h4,h5,h6{
  font-size: $heroText;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
  font-family: $buttonCta;
}

.page-animation-enters,
.page-animation-leaves{
  transition: 3s ease-in-out;
}

.page-animation-leaves{
  transition: 7s ease-out;
}

.readMore{
  color: $primaryColor !important;
}
</style>
