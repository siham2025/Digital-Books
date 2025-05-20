<template>
  <div class="container mt-4">
    <h2 class="mb-4">Liste des livres</h2>

    <!-- Grille responsive Bootstrap -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="book in books" :key="book._id">
        <BookCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookCard from '@/components/BookCard.vue'

// Liste des livres récupérée depuis l'API
const books = ref([])

// Appel API au montage du composant
onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/books') // URL locale de l'API
    if (!res.ok) throw new Error('Erreur lors du chargement des livres')

    const data = await res.json()
    books.value = data
  } catch (error) {
    console.error('Erreur API :', error)
  }
})
</script>
