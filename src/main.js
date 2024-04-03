// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

const app = createApp(App)

//gunakan router di vue js dengan plugin "use"
app.use(router)

//mount
app.mount('#app')