<template>
        <div class="form-wrap">
 
            <div class="account">
                <header class="headerLogin">
                    <button @click="redirect" class="goBackBtn">back</button>                    
                </header>
                
                <form action="" class="login" v-on:submit.prevent="submitForm">
                    <p class="field">
                        <input type="email" name="Email" 
                        id="email" placeholder="E-mail" 
                        v-model="email" required>
                    </p>


                    <p class="field">
                        <input type="password" name="password"
                        id="password" placeholder="Password" 
                        v-model="password" required>
                    </p>

                    <router-link :to="{name: 'ForgotPassword'}" class="forgot-password">Forgot your Password?</router-link>

                    <div class="notificationMsg alert alert-primary" role="alert" v-if="errors.length">
                        <p
                            v-for="error in errors" :key="error">
                            {{ error }}
                        </p>
                    </div>
                    
                    <button type="submit">Sign In</button>
                    <p class="login-register">
                        Don't have an account?
                        <router-link :to="{name: 'Register'}" class="register">Sign Up</router-link>
                    </p>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            email: null,
            password: null,
            errors: [],
        }
    },
    methods: {
        redirect(){
            this.$router.push({name: "Home"})
        },

        submitForm(){

            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem('token')
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

    },


}
</script>

<style lang="scss">
    @import "@/assets/scss/rootstyle.scss";

    .form-wrap{
        height: 100vh;
        background-color: lighten(#f1ece1, 4%);

        .goBackBtn{
            font-size: 1.2rem;
            outline: none !important;
            border: none;
            background-color: lighten($primaryColor, 10%);
            font-family: $buttonCta;
            letter-spacing: 0.2ch;
            border-radius: 10px;
            padding: 5px 14px;
            margin: 10px 0px;
            color: #fff;
        }

        .headerLogin{
            height: 40vh;
            background-image: url(../assets/svgs/wave.svg);
            background-position: top;
            background-repeat: no-repeat;
            background-size: 1700px;
            //border: 2px solid red;
            margin-top: -112px;
            //margin-bottom: none;
        }

        h2{
            text-align: center;
            font-family: $heroText;
            font-weight: 600;
            opacity: .9;
            transform: translateY(200%);
            letter-spacing: .08ch;
            font-size: 1.7rem;
            margin-bottom: 20%;
            color: #fff;
        }

        .account{
            transform: translateY(17%);
        }

        .login{
           // border: 2px solid red;
            padding: 0 10px;
            margin-top: 10vmin;
            
            ::-webkit-input-placeholder{
                border-radius: 50px;
                color: #000;
                letter-spacing: 2px;
                font-weight: normal;
                padding: 10px 0px;
                font-size: 1rem;
                font-family: $heroText;
                font-weight: bold;
                opacity: .5;
                //text-transform: lowercase;
            }

            input[type=text], input[type=email], input[type=password]{
                outline: none !important;
                border: none;
                width: 100%;
                height: 7vh;
                border-radius: 50px;
                padding: 10px 50px;
                font-size: 1.2rem;
                position: relative;
                -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px rgb(211, 209, 209);
                box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px rgb(211, 209, 209);
                letter-spacing: .07ch;

            

                &:focus{
                    outline: none;
                    -webkit-box-shadow: inset 2px 2px 5px #b8b9be, -3px -3px 7px rgb(211, 209, 209);
                    box-shadow: inset 2px 2px 5px #b8b9be, -3px -3px 7px rgb(211, 209, 209);

                }
            }

            input[type=checkbox]{
                display: none;
            }

            .field .bi-person-fill{
                font-size: 1.3rem;
                left: 32px;
                top: 121px;
                position: absolute;
                color: #000;
                text-align: center;
                line-height: 44px;
                transition: all 0.3s ease-out;
                pointer-events: none;
                opacity: .78;
            }

            .field .bi-lock-fill{
                font-size: 1.3rem;
                left: 32px;
                top: 187px;
                opacity: .78;
                position: absolute;
                color: #000;
                text-align: center;
                line-height: 44px;
                transition: all 0.3s ease-out;
                pointer-events: none;
            }

            .forgot-password{
                text-align: center;
                font-size: .90rem;
                color: $primaryColor;
                font-family: $paragraphText;
                font-weight: bold;
                opacity: .78;
                display: block;
                word-spacing: .17ch;
                margin: 7% 0%;
            }

            button[type=submit]{
                border: none;
                width: 100%;
                background-color: $primaryColor;
                height: 7vh;
                border-radius: 5px;
                padding: 10px 50px;
                font-size: 1.2rem;
                
                color: lighten(#f1ece1, 4%);
                -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px rgb(211, 209, 209);
                box-shadow: 3px 3px 6px #2c0701, -3px -3px 6px rgb(122, 0, 0);
                transition: 1s ease-out;
                font-size: 1.17rem;
                font-weight: bold;
                letter-spacing: .07ch;

                &:hover{
                    -webkit-box-shadow: inset 2px 2px 5px #b8b9be, -3px -3px 7px rgb(211, 209, 209);
                    box-shadow: inset 2px 2px 5px #b8b9be, -3px -3px 7px rgb(255, 255, 255);
                    transition: 1s ease-out;
                }

            }

            .login-register{
                margin-top: 7%;
                display: flex;
                justify-content: center;
                font-size: 1rem;
                color: darken(#f1ece1, 70%);
                font-family: $paragraphText;
                font-weight: bold;

                .register{
                    color: #000;
                    font-family: $heroText;
                    font-weight: 700;
                    font-size: 1.1rem;
                    padding: 0 10px;
                    margin-top: -0.78%;
                    letter-spacing: .02ch;

                    &::after{
                        content: '';
                        border-bottom: 3px solid $primaryColor;
                        height: 3px;
                        display: block;
                    }
                }
            }
        }

    }

</style>