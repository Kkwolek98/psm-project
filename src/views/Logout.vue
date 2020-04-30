<template>
    <div id="logout"></div>
</template>

<script>
import firebase from '../firebase/init'

export default {
    name: 'logout',
    data: function(){
        return{
            isLoggedIn: false,
            currentUser: false
        }
    },
    methods: {
        logOut(){
            firebase.auth.signOut().then( () =>{
                this.$router.push('/login');
            })
        }
    },
    mounted(){
        this.logOut()
    }
}
</script>