<template>
  <div class="container mt-4" v-if="book">
    <h2> Modifier le livre : {{ book.title }}</h2>
    <form @submit.prevent="handleSubmit" class="mt-4">
      <!-- Titre -->
      <div class="mb-3">
        <label class="form-label">Titre</label>
        <input v-model="book.title" type="text" class="form-control" required />
      </div>

      <!-- Prénom auteur -->
      <div class="mb-3">
        <label class="form-label">Prénom de l’auteur</label>
        <input v-model="book.author.firstName" type="text" class="form-control" required />
      </div>

      <!-- Nom auteur -->
      <div class="mb-3">
        <label class="form-label">Nom de l’auteur</label>
        <input v-model="book.author.lastName" type="text" class="form-control" required />
      </div>

      <!-- Année de publication -->
      <div class="mb-3">
        <label class="form-label">Année de publication</label>
        <input v-model="book.publicationYear" type="number" class="form-control" required />
      </div>

      <!-- Genre -->
      <div class="mb-3">
        <label class="form-label">Genre</label>
        <input v-model="book.genre" type="text" class="form-control" required />
      </div>

      <!-- Image -->
      <div class="mb-3">
        <label class="form-label">URL de la couverture</label>
        <input v-model="book.coverUri" type="text" class="form-control" />
      </div>

      <!-- Résumé -->
      <div class="mb-3">
        <label class="form-label">Résumé</label>
        <textarea v-model="book.recap" class="form-control" rows="3"></textarea>
      </div>

      <!-- Bouton soumettre -->
      <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
    </form>
  </div>
  
  <div v-else class="text-center mt-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Chargement...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const bookId = route.params.id

const book = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3000/books/${bookId}`)
    const data = await res.json()
    book.value = data
  } catch (err) {
    console.error('Erreur API admin :', err)
  }
})

async function handleSubmit() {
  try {
    const res = await fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book.value)
    })

    if (!res.ok) throw new Error('Échec de la mise à jour')
    alert('Livre modifié avec succès !')
    router.push('/admin/books')

  } catch (err) {
    console.error('Erreur lors de la mise à jour :', err)
    alert('Erreur lors de la mise à jour du livre')
  }
}
</script>
