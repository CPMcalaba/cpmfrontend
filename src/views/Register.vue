<template>
    <div class="form-wrap">
        <div class="account register-account">
            <header class="headerRegister">
                <button @click="redirect" class="goBackBtn">back</button>
                <h2>Join Church</h2>
            </header>
            <form action="" class="login" v-on:submit.prevent="submitForm"> 
                <p class="field">
                    <input type="text" name="text" 
                    id="text" placeholder="First Name" 
                    v-model="firstName" required>
                </p>


                <p class="field">
                    <input type="text" name="last-name" 
                    id="lastName" placeholder="Last Name" 
                    v-model="lastName" required>
                </p>

                <p class="field">
                    <input type="email" name="email" 
                    id="email" placeholder="Email" 
                    v-model="email" required>
                </p>

                <p class="field">
                    <input type="password" name="password" 
                    id="password" placeholder="Password" 
                    v-model="password" required>
                </p>

                <div class="notificationMsg alert alert-primary" role="alert" v-if="errors.length">
                    <p
                        v-for="error in errors" :key="error">
                        {{ error }}
                    </p>
                </div>


                <button type="submit" @click="submitForm">Sign Up</button>

                <p class="login-register">
                    Already have an account?
                    <router-link :to="{name: 'Login'}" class="register">Sign in</router-link>
                </p>
            </form>
            
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: "Register",
    data(){
        return{
            firstName: '',
            lastName: '',
            //username: '',
            email: '',
            password: '',
            errors: []
        }
    },

    /*async created(){
        await axios
        .put("http://127.0.0.1:8000/cpm_api/users/")
    },*/

    methods: {
        submitForm(){
            this.errors = []

            if (this.firstName === '' && this.lastName === '' && this.password === "" && this.email === ''){
                this.errors.push('Some fields are missing!')
            }

            if(!this.errors.length){
                const formData = {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    //username: this.username,
                    email: this.email,
                    password: this.password
                }

                axios 
                    .post('https://cpmapi.herokuapp.com/cpm_api/users/', formData)
                    .then(() => {
                        this.$router.push('/login')
                    })

                    .catch(error => {
                        if (error.response){
                            for(const property in error.response.data){
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }

                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again later Thank you!')
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        },

        redirect(){
            this.$router.push({name: "Home"})
        }
    }
}
</script>

<style lang="scss" scoped>

    .register-account{
        transform: translateY(0%) !important;
        height: 100%;

        h2{
            color: #fff;

           margin-bottom: 10% !important;
        }

        button[type=submit]{
            margin-top: 5% !important;
            
        }

        .headerRegister{
            height: 40vh;
            background-image: url(../assets/svgs/wave.svg);
            background-position: top;
            background-repeat: no-repeat;
            background-size: 1700px;
            //margin-bottom: none;
        }

        .login{
            //border: 2px solid red;
            margin-top: 20px;
        }
    }



    .login-register{
        margin-top: 3% !important;
    }

    .form-wrap{
        overflow: block;
    }

    .notificationMsg{
        font-size: 1rem;
    }
</style>