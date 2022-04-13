<template>
    <h2 class="testimony-text">Divine Testimonies</h2>
    <div class="container-fluid testimony__section">
        <Vue3Marquee 
        :pauseOnHover="true" 
        :delay="-7"
        :gradient="true"
        :gradientColor="[255,255,255]"
        :gradientWidth="`2%`">
            <div class="testimony__section--custom-card"  v-for="testimony in testimony" :key="testimony">
                <div class="layer"></div>
                <div class="content">
                        <i class="fas fa-quote-right"></i>
                        <p>
                            {{testimony.body}}
                        </p>
                        <img src="../assets/images/crossblue.jpg" alt="John Doe" class="testifier-img">
                        <div class="testifier-name">
                            <h2>{{testimony.title}}</h2>
                        </div>
                </div>
            </div>
        </Vue3Marquee>
    </div>
 
</template>

<script>
import axios from 'axios'
import Vue3Marquee from 'vue3-marquee'
export default {
    components: {Vue3Marquee},
    data(){
        return{
            testimony: [],
        }
    },

    async created(){
        axios
        .get('http://127.0.0.1:8000/cpm_api/blog_posts/')
        .then(response => (this.testimony = response.data))
        .catch(error => console.log(error))
    },
}
</script>

<style lang="scss">
    .testimony-text{
        margin-top: 20vmin;
        text-align: center;
        font-size: 2rem;
        font-family: $heroText;
        font-weight: bold;
        opacity: .9;
        color: $defaultBlack;
        overflow: hidden;

        &::before,
        &::after{
            content: "";
            background-color: #000;
            display: inline-block;
            height: 2px;
            position: relative;
            vertical-align: middle;
            width: 20%;
            opacity: .3;
        }

        &::before{
            right: .1em;
            margin-left: -50%;
        }

        &::after{
            left: .1em;
            margin-right: -50%;
        }
    }
    .testimony__section{
        padding:0;
        background-color: $primaryColor;

        &--custom-card{
            position: relative;
            width: 300px;
            min-height: 370px;
            margin: 30px 20px;
            border-radius: 10px;
            background-color: #fff;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            box-sizing: border-box;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,.5);
            overflow: hidden;
            &:hover .layer{
                top: 0;
            }

            .layer{
                position: absolute;
                top: calc(100% - 2px);
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(#03a9f4, #e91ee3);
                z-index: 1;
                transition: 0.5s;
            }

            .content{
                position: relative;
                z-index: 2;

                
                i,
                .fa-quote{
                    font-size: 2rem;
                    color: $primaryColor;
                    margin-bottom: 20px;

                }

                p{
                    font-size: 1.022rem;
                    font-family: $paragraphText;
                    font-weight: bold;
                    line-height: 27px;
                    color: #000;
                    margin-bottom: 40px;
                }

                .testifier-img{
                    width: 80px;
                    height: 80px;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 0 10px 20px rgba(0,0,0,.2);
                    margin-bottom: 15px;
                }

                .testifier-name h2{
                    font-size: 1.2rem;
                    color: $primaryColor;
                    font-weight: bold;
                    font-family: $heroText;
                    word-spacing: 4px;
                }
            }
        }

    }


</style>