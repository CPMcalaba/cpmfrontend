<template>
  <div class="navigation" :class="[isSticky ? stickyClass : '']">
        <nav>
            <div class="navbar-desktop">
                <router-link :to="{name: 'Home'}" class="site-brand">CPM Idimita</router-link>
                <div class="desktop-nav">
                    <ul class="desktop-nav__container" v-show="!mobile">
                    <router-link to="/"><li class="nav-list">Home</li></router-link>
                    <router-link to="/"><li class="nav-list">Blog</li></router-link>
                    <router-link to="/"><li class="nav-list">Sermons</li></router-link>
                    <router-link to="/"><li class="nav-list">Gallery</li></router-link>
                    <router-link to="/"><li class="nav-list">Dashboard</li></router-link>
                    <router-link to="/"><li class="nav-list btn btn__join--us">Join Us</li></router-link>
                </ul>
                </div>
                    <i @click="toggleMobileMenu" class="bi bi-list mobile-menu" :class="[isTr ? hideHam : '']" v-show="mobile"></i>
                    <i @click="checkIsTr" class="bi bi-x fa-xmark mobile-menu-close" v-show="isTr" :class="[isTr ? dspClose : '']"></i>
            </div>
        </nav>
    
    
      <div class="mobile-nav">
          <transition name="slide">
              <ul class="mobile-nav__container" v-show="mobileView">
                  <router-link :to="{name: 'Home'}"><li class="nav-list"><i class="fas fa-home menuList-icon"></i><span>Home</span></li></router-link>
                  <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-blog menuList-icon"></i><span>Blog</span></li></router-link>
                  <router-link :to="{name: 'Sermon'}"><li class="nav-list"><i class="fas fa-church menuList-icon fa-1x"></i><span>Sermons</span></li></router-link>
                  <router-link to="/"><li class="nav-list"><i class="fas fa-camera-retro menuList-icon"></i><span>Gallery</span></li></router-link>
                  <li class="nav-list"><a href="https://cpmapi.herokuapp.com/admin/"><i class="fas fa-tachometer-alt menuList-icon"></i><span>Dashboard</span></a></li>
                  <li class="nav-list drop-down" @click="toggleMore">
                    <i class="fas fa-ellipsis-h menuList-icon"></i><span>More</span> <i @click="rotate180" class="bi bi-caret-down-fill" :class="[isRotate ? rotateClass : '']"></i>
                  </li>
                  <transition name="fade">
                  <div class="moreitem" v-if="showMore">
                    <router-link :to="{name: 'SundaySchool'}">Sunday School</router-link>
                    <router-link to="/">Study Bible</router-link>
                  </div>
                  </transition>

                  <router-link :to="{name: 'Register'}"><li class="nav-list btn btn__join--us">Join Us <i class="fas fa-sign-in-alt fs"></i></li></router-link>


                <section class="socials-menu-icon"> 
                  <i class="fa fa-facebook sc-icon"></i>
                  <i class="fab fa-twitter sc-icon"></i>
                  <i class="fab fa-youtube sc-icon"></i>
                </section>
              </ul>
            </transition>
      </div>

        </div>

</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            showMore: false,
            mobile: null,
            mobileView: null,
            windowWidth: null,
            windowHeight: null,
            isSticky: false,
            stickyClass: 'is_sticky',
            scrollPosition: 0,
            isRotate: false,
            transition: false,
            rotateClass: 'is-rotate',
            showmore: 'show-more',
            isTr: false,
            dspClose: 'dspClose',
            hideHam: 'hideHam',
        }
    },

    created(){
        window.addEventListener('resize', this.checkScreenSize);
        window.addEventListener('scroll', this.handleScroll);
        this.checkScreenSize();
    },

    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
        toggleMore(){
            this.showMore = !this.showMore
        },

        //detects our screen size
        checkScreenSize(){
            this.windowWidth = window.innerWidth;

            if (this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileView = false;
            return;
        },

        handleScroll() {
            this.scrollPosition = window.scrollY
            if(this.scrollPosition >= 100) {
                this.isSticky = true
            }
            else{
                this.isSticky = false
            }
        },

        //rotate caret
        rotate180(){
            this.isRotate = !this.isRotate
        },

        //Toggle the hamburger mobile menu
        toggleMobileMenu(){
            this.mobileView = true;
            if(this.mobileView){
                this.isTr = true;

            }
        },

        checkIsTr(){
            this.mobileView = false
            this.isTr = !this.isTr;
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/rootstyle.scss";

    //Navigation Global Styles Starts Here
    .navigation{
        margin: 0px !important;
        height: 80px;
        width: 100%;
        border-bottom: 1px solid;
        z-index: 8888 !important;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        position: relative;
        -webkit-transition: background-color .5s ease-out;
        transition: background-color .5s ease-out;
        -o-transition: background-color .5s ease-out;
        transition: .5s ease-in;
    }

    .is_sticky{
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
        -webkit-transition: background-color .5s ease-out;
        transition: background-color .5s ease-out;
        -o-transition: background-color .5s ease-out;
        transition: .5s ease-out;
    }
    .menuList-icon{
        font-size: 1.5rem;
        padding-right: 20px;
        
    }

    .bi-caret-down-fill{
        color: red;
        float: right;
        transition: .1s ease-in;
        margin-top: 5px;
    }

    .is-rotate{
        transition: .1s ease-in;
        transform: rotate(180deg);
    }

    .socials-menu-icon{
        //border: 2px solid blue;
        margin-top: 45px;
        border-top: 1px solid lightgrey;
        padding: 7px;
        width: 100%;

        .sc-icon{
            padding: 10px;
            font-size: 20px;
            border: 2px solid lightgrey;
            border-radius: 50%;
            margin-left: 30px;
            transform: translateX(30%);
        }
    }

    .fs{
        margin-left: 10px;
    }

    //Mobile Navigation Starts Here
    .mobile-nav__container{
        width: 70%;
        background-color: red;
        min-height: 100vh;
        z-index: 1 !important;
        position: absolute;
        top: 100%;
        
        margin-top: 0px;
        list-style: none;
        padding: 0px !important;
        background: #fffef7;
        z-index: 1 !important;
        animation: slidein 1s;
    

        .nav-list{
            padding: 20px;
            margin: 0px;
            padding-left: 30px;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: .6px;
            font-family: $heroText;
            text-decoration: none;
            color: $defaultBlack;
            opacity: .7;
            z-index: 1 !important;


            &:not(.btn__join--us){
                border-bottom: 1.7px solid lightgrey;
            }

            span{
                margin-left: 1px;

            }
            .menu-sermon{
                margin-left: 1px;
            }
        }

    }



    .mobile-menu{
        font-size: 3rem;
        margin-right: 10px;
        color: $primaryColor;
    }

    .moreitem{
        display: flex;
        flex-direction: column;
        transition: 3s ease;

        a{
            font-size: 1rem;
            color: $defaultBlack;
            font-family: $heroText;
            padding: 20px;
            padding-left: 20px;
            border-bottom: 1px solid lightgrey;
            font-weight: 500;
            text-decoration: none;
        }
    }

    .show-more{
        transition: 20s ease-in;
        border: 2px solid red;
    }

    @keyframes slidein {
        0%{
            transform: translateX(-900px);
        }
        100%{
            transform: translateX(0);
        }
    }
    //Mobile Navigation Ends Here//



    //Desktop Navigation Starts Here
    .navbar-desktop{
        display: flex;
        justify-content: space-between;

        .site-brand{
            padding: 19px 10px 10px 10px;
            font-size: 1.3rem;
            font-family: $heroText;
            text-align: center;
            margin-left: 10px;
            height: inherit;
            font-weight: 500;
            color: #000;
            @media (min-width: 900px){
                padding: 19px 10px 0px 10px;
            }
        }

        .desktop-nav__container{
            //display: none;
            display: flex;
            align-items: center;
            margin: 0;
            margin-right: 10px;
            padding: 0;


            .nav-list:not(.btn__join--us){
                height: 70px;
                padding: 20px 10px 7px 10px; 
                text-align: center;
                font-size: 1.2rem;
            }

            .btn__join--us{
                background: red;
                color: #fff;
                font-weight: 600;
                letter-spacing: .7px;
                word-spacing: 1px;
                padding: 14px;
            }

            .drop-down{
                position: relative;
            }

            .show-more{
                position: absolute;
                min-width: 170px;
                background-color: #f9f9f9;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                right: 20px;
                top: 70px;
                @media (max-width: 750px){
                    position: absolute;
                    min-width: 160px;
                    background-color: #f9f9f9;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    right: 20px;
                    top: 70px;
                }
            }

            .more-item{
                padding: 12px 16px;
                font-size: 1.2rem;
                border-bottom: 1px solid rgba(0,0,0,0.2);
            }
        }


    }
    //Desktop Navigation Ends Here*/

    .mobile-menu-close{
        //border: 2px solid red;
        width: 70px;
        height: 80px;
        color: $primaryColor;
        
    }

    .bi-x{
        font-size: 3.5rem;
        text-align: center;
        margin-top: -10px;
    }

    .dspClose{
        display: block;
    }

    .hideHam{
        display: none !important;
    }


</style>