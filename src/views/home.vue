<template>
    <div>
      <h1>Welcome to the Home Page</h1>
      <p v-if="authStore.isAuthenticated">
        You are logged in as {{ authStore.user?.username }}
      </p>
      <button v-if="authStore.isAuthenticated" @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/auth'; // Import the store
  
  export default {
    setup() {
      const authStore = useAuthStore(); // Access the store
  
      function logout() {
        authStore.logout(); // Call the logout action from Pinia store
        this.$router.push('/login'); // Redirect to login page after logout
      }
  
      return { authStore, logout };
    },
  };
  </script>
  