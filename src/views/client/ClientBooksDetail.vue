<template>
  <!-- Affichage des détails du livre quand il est chargé -->
  <div class="container mt-4" v-if="book">
    <h2>{{ book.title }}</h2>
    <p><strong>Auteur :</strong> {{ book.author.firstName }} {{ book.author.lastName }}</p>
    <p><strong>Année :</strong> {{ book.publicationYear }}</p>
    <p><strong>Genre :</strong> {{ book.genre }}</p>
    <img :src="book.coverUri" class="img-fluid my-3" alt="Couverture du livre" />
    <p><strong>Résumé :</strong> {{ book.recap || 'Aucun résumé disponible.' }}</p>
  </div>

  <!-- Affichage du spinner de chargement si le livre n’est pas encore disponible -->
  <div class="text-center mt-5" v-else>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Chargement...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// On récupère l'ID du livre depuis l'URL
const route = useRoute()
const bookId = route.params.id

// Variable réactive qui contiendra les infos du livre
const book = ref(null)

// Appel API au chargement du composant pour récupérer le livre
onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3000/books/${bookId}`)
    const data = await res.json()
    book.value = data // on met à jour la variable "book"
  } catch (error) {
    console.error('Erreur lors de la récupération du livre :', error)
  }
})
</script>
