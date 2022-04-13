<template>
    <div class="detail-body">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="scss" scoped>
    .detail-body{
        margin-top: 30px;

        h2{
            font-family: $heroText;
            word-spacing: .07ch;
            font-weight: 600;
            line-height: 1.7rem;
            color: $defaultBlack;
        }

        p{
            margin-top: 20px;
            font-size: 1rem;
            font-family: $paragraphText;
            word-spacing: .07ch;
            font-weight: 600;
            line-height: 1.7rem;
            color: $defaultBlack;
            opacity: .7;
        }
    }
</style>