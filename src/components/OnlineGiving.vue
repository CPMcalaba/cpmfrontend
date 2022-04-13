<template>
    <div class="online__giving">
        <h2>Online Giving</h2>
        <p>You can now give you offerings, seed faith and tite online. To give click <span>Here</span></p>
    </div>
    
</template>

<script>

export default {
    components: {

    }
}
</script>

<style lang="scss" scoped>
    .online__giving{
        margin: 20vmin auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;

        &--icon-payment{
            text-align: center;
            margin-bottom: 10px;
        }

        h2{
            font-family: $heroText;
            font-weight: 600;
            margin-top: 1px;
            font-size: 1.7rem;
            letter-spacing: 0.77px;
            word-spacing: 1px;
            color: darken($primaryColor, 10%);
        }

        p{
            font-size: 1.22rem;
            text-align: center;
            margin-top: 10px;
            font-family: $paragraphText;
            font-weight: 600;
            line-height: 37px;
            padding: 10px;
        }

        span{
            color: darken($primaryColor, 10%);
            font-size: 1.3rem;
        }
    }

</style>