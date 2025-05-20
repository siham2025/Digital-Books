<template>
  <div class="container mt-4">
    <h2>Ajouter un nouveau livre</h2>

    <form @submit.prevent="handleCreate" class="mt-4">

      <!-- Prénom de l'auteur -->
      <div class="mb-3">
        <label class="form-label">Prénom de l’auteur</label>
        <input v-model="book.author.firstName" type="text" class="form-control" required />
      </div>

      <!-- Nom de l'auteur -->
      <div class="mb-3">
        <label class="form-label">Nom de l’auteur</label>
        <input v-model="book.author.lastName" type="text" class="form-control" required />
      </div>

      <!-- Titre -->
      <div class="mb-3">
        <label class="form-label">Titre</label>
        <input v-model="book.title" type="text" class="form-control" required />
      </div>

      <!-- Titre original -->
      <div class="mb-3">
        <label class="form-label">Titre original</label>
        <input v-model="book.originalTitle" type="text" class="form-control" />
      </div>

      <!-- Année de publication -->
      <div class="mb-3">
        <label class="form-label">Année de publication</label>
        <input v-model.number="book.publicationYear" type="number" class="form-control" required />
      </div>

      <!-- Genre -->
      <div class="mb-3">
        <label class="form-label">Genre</label>
        <input v-model="book.genre" type="text" class="form-control" />
      </div>

      <!-- URL de la couverture -->
      <div class="mb-3">
        <label class="form-label">Image (URL)</label>
        <input v-model="book.coverUri" type="text" class="form-control" />
      </div>

      <!-- Résumé -->
      <div class="mb-3">
        <label class="form-label">Résumé</label>
        <textarea v-model="book.recap" rows="4" class="form-control"></textarea>
      </div>

      <!-- Bouton de soumission -->
      <button type="submit" class="btn btn-success">
        <i class="bi bi-check-circle"></i> Créer le livre
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Livre vide à remplir
const book = ref({
  author: {
    firstName: '',
    lastName: ''
  },
  title: '',
  originalTitle: '',
  publicationYear: '',
  genre: '',
  coverUri: '',
  recap: ''
})

// Fonction pour créer le livre via API
async function handleCreate() {
  try {
    console.log('Payload envoyé :', book.value)
    const res = await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(book.value)
    })
    const data = await res.json()
console.log('Réponse API après création :', data) // confirme que l’objet est bien renvoyé avec un _id valide

    if (!res.ok) throw new Error("Erreur lors de la création")

    alert("Livre ajouté avec succès ")
    router.push('/admin/books')
  
  } catch (err) {
    console.error('Erreur création livre :', err)
    alert("Une erreur est survenue")
  }
}
</script>
