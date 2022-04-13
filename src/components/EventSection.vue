<template>
    <h2 class="testimony-text container-fluid">Church Events</h2>
    <div class="event-container" > <a href="#">
        <div class="card">
            <div class="img-section">
                <img  v-if="imgExist" src="#" alt="">
                <h2 v-else class="no-image"><i class="fa fa-calender-alt"></i>Event One</h2>
            </div>
            <div class="text-section">
                <h2>Event name</h2>
                <p>Venue:</p>
                <p>Time:</p>
            </div>
        </div></a>
    </div>
</template>

<script>
export default {
    data() {
        return{
            imgExist: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.event-container{
    padding: 10px;
    background-color: lighten($primaryColor, 47%) ;
    //border: 2px solid green;
     min-height: 20vh;

    .card{
        display: flex;
        flex-direction: row;
        min-height: 20vh;
        //border: 2px solid blue;

        .img-section{
            //border: 2px solid brown;
            height: inherit;
            background-color: lighten($primaryColor, 30%);
            position: relative;
            padding: 0;
            margin: 0;

            ::after{
                content: '';
                width: 40px;
                height: 40px;
                background-color: lighten($primaryColor, 47%);
                border: none;
                outline: none;
                position: absolute;
                left: -30px;
                bottom: -55px;
                transform: rotateZ(67deg);
                z-index: 1;
            }

            h2{
                transform: translateY(30px);
                text-align: center;
                padding: 10px;
                color: $defaultWhite;
                font-family: $heroText;
                letter-spacing: 2px;
            }

        }


        .text-section{
            //border: 2px solid red;
            width: 70%;
            padding: 10px;

            h2{
                font-size: 1.3rem;
                font-family: $heroText;
                color: $primaryColor;
                font-weight: 600;
                word-spacing: .3em;
                letter-spacing: .13ch;
                outline-color: black;
            }

            p{
                font-family: $paragraphText;
                font-size: 1rem;
                padding: 5px 0px 0 0;
                color: $defaultBlack;
                font-weight: bold;
                opacity: .8;
            }

        }

        .card-body{
            //width: 70%;
            border: 2px solid red;
        }
    }
}

</style>