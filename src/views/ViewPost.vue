<template>
    <section>
        <DetailHero :post="post" />
        <DetailBody :post="post" />
        <DetailComment :post="post" />
    </section>
</template>

<script>
import DetailHero from '@/components/ViewPost/DetailHero.vue'
import DetailBody from '@/components/ViewPost/DetailBody.vue'
import DetailComment from '@/components/ViewPost/DetailComment.vue'
import axios from 'axios'
export default {
    components: {
        DetailHero,
        DetailBody,
        DetailComment,
    },

    data(){
        return{
            post: {},
        }
    },

    async created(){
        await axios
        .get('http://127.0.0.1:8000/cpm_api/blog_posts/' + this.$route.params.id)
        .then(response => (this.post = response.data))
        .catch(error => console.log(error))
    }
}
</script>

<style scoped>
    section{
        padding: 20px;
        
    }
</style>