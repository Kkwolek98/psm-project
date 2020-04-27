<template>
    <div class="container">
        <h1>Login</h1>

        <form class="login-form">
            <label for="login-email">Username or Email</label><br> 
            <input type="email" id="login-email" required><br><br>
            <label for="login-password">Password</label><br>
            <input type="password" id="login-password" required>
            <br><br>
            <button>Log in</button>
        </form>
        
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
         
    }
</script>