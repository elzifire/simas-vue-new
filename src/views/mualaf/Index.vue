<template>
    <div id="app" class="container mt-5">
      <form @submit.prevent="sendToWhatsApp" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required>
          <div class="invalid-feedback">
            Please enter your name.
          </div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message:</label>
          <textarea id="message" v-model="form.message" class="form-control" required></textarea>
          <div class="invalid-feedback">
            Please enter a message.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        form: {
          name: '',
          message: ''
        }
      };
    },
    methods: {
      sendToWhatsApp() {
        const phoneNumber = '6282124205714'; // Ganti dengan nomor WhatsApp tujuan
        const text = `Name: ${this.form.name}\nMessage: ${this.form.message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  </style>
  