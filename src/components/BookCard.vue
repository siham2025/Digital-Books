<template>
  <!-- Carte Bootstrap pour afficher un livre -->
  <div class="card h-100 shadow-sm">
    <img :src="book.coverUri" class="card-img-top" alt="Couverture du livre" /> 
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text">
        <strong>Auteur :</strong> {{ book.author.firstName }} {{ book.author.lastName }}<br>
        <strong>Année :</strong> {{ book.publicationYear }}
      </p>

      <!-- Bouton pour accéder à la page de détail -->
      <router-link :to="`/books/${book._id}`" class="btn btn-primary">
        Voir le détail
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Réception de la prop "book" passée par le parent
defineProps({
  book: Object
})
</script>