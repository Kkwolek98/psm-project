<template>
    <div class="container">
        <h1>Register</h1>

        <form class="signup-form">
            <label for="signup-email">Email</label><br> 
            <input type="email" id="signup-email" v-model="email" required><br><br>
            <label for="signup-password">Password</label><br>
            <input type="password" id="signup-password" v-model="password" required><br><br>
            <label for="signup-repassword">Confirm Password</label><br> 
            <input type="password" id="signup-pepassword"  required>
            
            <br><br>
            <button v-on:click="registerUser">Sign up</button>

        </form>

            <div id="error">{{error}}</div>
    </div>
</template>

<script>

    import firebase from '../firebase/init'

    export default {
        name: 'SignUpPage',
        data: function() {
            return{
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            registerUser(e){
                console.log(firebase.auth)
                console.log(this.email, this.password)
                e.preventDefault();
                firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
                    console.log(user.user)    
                })
                .catch(error => {
                    this.error = error
                }) 
            }
        }
         
    }
</script>