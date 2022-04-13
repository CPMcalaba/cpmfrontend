<template>
        <div class="form-wrap">
            <div class="account">
                <h2>Reset Password</h2>
                <p>Forgot your password? Enter Your E-mail to reset its</p>
                <form action="" class="login">
                    <p class="field">
                        <input type="email" name="email" 
                        id="email" placeholder="E-MAIL" 
                        v-model="email" required>
                        <i class="bi bi-person-fill"></i>
                    </p>
                    <!--div v-for="datar in datar" :key="datar.id">
                        <h1>{{datar.username}}</h1>
                    </div-->
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'ForgotPassword',
    data(){
        return{
            datar:[],
        }
    },

    async created(){
        axios
        .get('http://127.0.0.1:8000/cpm_api/users/')
        .then(response => (this.datar = response.data))
        .catch(error => console.log(error))
    },

    methods: {
       async getUsers(){
            await axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/cpm_api/users/',
                auth: {
                    username: 'admin',
                    password: 'Oneluv@123'
                }
            }).then(response => this.datar = response.data)
            
        }
    }
}
</script>