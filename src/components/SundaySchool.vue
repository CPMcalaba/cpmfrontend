<template>
    <header class="header-text">
        <h1>Sunday School Manual</h1>
    </header>

    <!--h2 class="">Year: <time datetime="2021">2021</time></!--h2-->
    <section class="sunday__school container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <div class="sunday__school--content">
                    <router-link to="/"> 
                        <header class="sunday__school--lesson">
                            <h2>Topic</h2>
                            <h3>Hardwork</h3>
                        </header>  
                            <div class="date" ><time datetime="2021-12-01">2021/12/01</time></div>     
                    </router-link>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="sunday__school--content">
                    <router-link to="/"> 
                        <header class="sunday__school--lesson">
                            <h2>Topic</h2>
                            <h3>Techniques Of Passing</h3>
                        </header>
                        <div class="date" ><time datetime="2021-12-01">2021/12/01</time></div>        
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    components: {
        Footer,
    }

}
</script>

<style lang="scss">

    .header-text{
        margin-top: 0;
        background: $secondaryColor;
        padding: 10px;
        text-align: center;

        h1{
            font-size: 1.5rem;
            color: $defaultWhite;
            letter-spacing: 1.2px;
            word-spacing: 2px;
        }
    }


    .sunday__school{
        margin-top: 20px;
        padding: 5px;

        &--content{
            min-height: 30vmin;
            margin: 10px;
            margin-left: 20px;
            position: relative;
            width: 90%;
            box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px rgb(211, 209, 209);
            text-align: center;
            border-radius: 5px;


            header h2{
                transform: translateY(70%);
                color: $defaultBlack;
                font-size: 1.2rem;
                font-weight: bold;
                font-family: $heroText;
                letter-spacing: 2px;
                text-transform: uppercase;
            }

            header h3{
                transform: translateY(130%);
                color: lighten($secondaryColor, 5%);
                font-size: 1.5rem;
                font-weight: 700;
                font-family: $paragraphText;
                word-spacing: 2px;
                opacity: .7;
            }
        }
        
    }

    .date{
        font-size: .8rem;
        text-align: right !important;
        margin-top: 60px;
        padding: 0px 10px;
        font-weight: bold;
    }
</style>