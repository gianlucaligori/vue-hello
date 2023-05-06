// Esercizio di oggi: Vue Hello
// nome repo: vue-hello
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = Vue.createApp({
    data() {
      return {
        title: 'Frank Underwood',
        image: "img/what.jpg"
      }
    }
  })
  
  app.mount('#app')