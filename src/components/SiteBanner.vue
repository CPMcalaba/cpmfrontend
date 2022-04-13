<template>
    <div class="site__banner">
        <div class="container-fluid site__banner--container">
            <div class="site__banner--text">
                <div class="site__banner--image">
                    <i class="fas fa-dove "></i>
                </div>
                <div class="site__banner--hero-text">
                    <h2>christain pentecostal mission intl calabar1</h2>
                </div>
                <div class="site__banner--subhero-text">
                    <p>Forth together divided place and, created fish seas. 
                        Which darkness. Over won't male signs saying earth won't morning in they're.
                    </p>
                </div>
            </div>

            <div class="site__banner--btn">
                <router-link :to="{ name: 'Register' }" class="custom-btn">Join Church</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/rootstyle.scss";

    .site__banner{
        background-image: url('../assets/images/crossblue.jpg');
        min-height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #362424;
        background-blend-mode: multiply;

        &--image i{
            font-size: 5rem;
            transform: translateY(-5vh);
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $primaryColor;
        }
    }

    .site__banner--container{
        z-index: -1 !important;

        .site__banner--text{
            transform: translateY(60%);
//            border: 2px solid red;
            padding: 0;


            .site__banner--hero-text{
                text-transform: capitalize;
                display: flex;
                text-align: center;
                color: $lightPrimaryColor;
                font-family: $heroText;
                margin: 0;
                

                h2{
                    line-height: 2.7rem !important;
                    font-size: 2.2rem;
                    letter-spacing: 0.01ch;
                    word-spacing: 1px;
                }
                
            }

            .site__banner--subhero-text p{
                color: $defaultWhite;
                opacity: .7;
                font-size: 1rem;
                line-height: 1.5rem;
                word-spacing: 2px;
                text-align: center;
                margin-top: 10px;
            }
        }

        .site__banner--btn{
            transform: translateY(30vh);
            display: flex;
            justify-content: center;

            .custom-btn{
                padding: 10px 30px;
                font-size: 1rem;
                word-spacing: .3ch;
                background-color: $primaryColor;
                color: $lightPrimaryColor;
                font-family: $buttonCta;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        }
    }
</style>