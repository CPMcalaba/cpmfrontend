import axios from "axios"
import { ref } from 'vue'

const getPosts = () => {
    const blogPost = ref([])
    const error = ref([null])


    const load = async () => {
        let post = await axios
        .get('http://127.0.0.1:8000/cpm_api/blog_posts/')
        .then(response => (post = response.data))
        .catch(error => console.log(error))

        blogPost.value = post; 
        error.value = error


    }

    return {
        blogPost, 
        error,
        load
    }
}

export default getPosts
