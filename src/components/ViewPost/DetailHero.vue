<template>
    <div class="detail-hero">
        <p class="post-date">21, may 2021</p>
        <section v-if="post.img"></section>
        <section v-else class="post-img-ifelse">
            <h2>{{post.title}}</h2>
        </section>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="scss" scoped>
    .post-img-ifelse{
        background: lighten($primaryColor, 30%);
        margin:0;
        //margin-left: 5%;
        text-align: center;
        padding: 70px 30px;

        h2{
            padding: 0;
            margin:0;
            color: $defaultBlack;
        }
    }

    .post-date{
        font-size: 1rem;
        margin: 0;        
    }
</style>