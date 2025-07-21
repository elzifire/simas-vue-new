<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <router-link to="/" class="home-link">Go back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: '404 Not Found',
  },
};
</script>
    
<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
}

.not-found-content {
  max-width: 600px;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.not-found h1 {
  font-size: 6rem;
  margin: 0;
  color: #343a40;
}

.not-found p {
  font-size: 1.25rem;
  color: #6c757d;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>