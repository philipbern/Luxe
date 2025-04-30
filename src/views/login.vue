<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth'; // Import the store
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const authStore = useAuthStore(); // Use the store
  
      function handleLogin() {
        // For demo purposes, we'll authenticate with hardcoded values
        if (username.value === 'admin' && password.value === 'password') {
          authStore.login({ username: username.value });
          // Redirect to home page after login
          this.$router.push('/');
        } else {
          alert('Invalid credentials');
        }
      }
  
      return { username, password, handleLogin };
    },
  };
  </script>
  