import { createApp } from 'vue'
// Nel caso in cui volessimo usare SASS, è consigliabile rimuovere l'importazione del file style.css da qui (e cancellarlo eventualmente)
// Non è obbligatorio, ma potremmo creare inutili conflitti
// import './style.css'
import App from './App.vue'

// Per installare e far funzionare Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/vite/
import * as bootstrap from 'bootstrap'

createApp(App).mount('#app')
