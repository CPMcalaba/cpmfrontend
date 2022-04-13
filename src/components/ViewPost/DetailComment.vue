<template>
    <div class="detail-comment">
        <h2>Comments</h2>
        <div class="comment-list" v-if="comment">
            <p v-for="comment in comments" :key="comment.id">
                {{comment}} - {{comment.author}}
            </p>
        </div>
        <p v-else class="no-comment">No Comment...</p>
        <form action="" method="post" >
            <div class="comment-form">
                <textarea name="comment" id="postComment" cols="80" rows="3" placeholder="Add Comment" class="add-comment"></textarea>
                <button type="submit" value="post">Post</button>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="scss" scoped>
    .detail-comment{
        min-height: 100px;
        margin-top: 40px;

        H2{
            opacity: .7;
        }

        .comment-form{
            display: flex;
            flex-direction: row;
            //position: absolute;
            bottom: 0;
            width: 100%;
            justify-content: space-between;
        }

        .no-comment{
            font-size: 1rem;
            margin: 20px;
            color: $defaultBlack;
            font-weight: 600;
            font-family: $paragraphText;
        }

        textarea{
            height: 50px;
            font-size: 1rem;
            width: 77%;
            border: 1px solid $primaryColor;
            box-shadow: 2px 2px 7px lightgrey, -3px -3px 7px lightgray;

            :focus{
                border: none !important;
                outline: red !important;
            }
        }

        button{
            width: 70px;
            font-size: 1rem;
            padding: 10px;
            border: none;
            background-color: lighten($primaryColor, 30%);
            color: $defaultBlack;
        }
    }

</style>