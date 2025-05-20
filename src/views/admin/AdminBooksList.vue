<template>
  <div class="container mt-4">
    <!-- Titre de la page et bouton pour créer un nouveau livre -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Liste des livres (admin)</h2>

      <!-- Bouton qui redirige vers le formulaire de création -->
      <router-link to="/admin/books/create" class="btn btn-success">
        <i class="bi bi-plus-lg"></i> Ajouter un livre
      </router-link>
    </div>

    <!-- Tableau pour afficher les livres -->
    <div class="table-responsive">
      <table class="table table-dark table-hover align-middle">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Année</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <!-- Affichage dynamique des livres -->
          <tr v-for="book in books" :key="book._id">
            <td>{{ book.title }}</td>
            <td>
              {{ book.author?.firstName || "Auteur inconnu" }}
              {{ book.author?.lastName || "" }}
            </td>
            <td>{{ book.publicationYear }}</td>
            <td>
              <!-- Bouton pour modifier le livre -->
              <router-link
                :to="`/admin/books/update/${book._id}`"
                class="btn btn-sm btn-outline-primary me-2"
              >
                Modifier
              </router-link>

              <!-- Bouton de suppression (fonctionnalité à venir) -->
              <button
                class="btn btn-sm btn-outline-danger"
                @click="handelDelete(book._id)"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Variable réactive contenant la liste des livres
const books = ref([]);

// Appel API au montage du composant pour récupérer les livres
onMounted(async () => {
  try {
    const res = await fetch("http://localhost:3000/books?perPage=50");
    const data = await res.json();
    books.value = data;
  } catch (err) {
    console.error("Erreur API admin :", err);
  }
});

// Fonction pour supprimer un livre avec methode DELETE
async function handelDelete(bookId) {
  const confirmDelete = confirm("voulez-vous vraiment supprimer ce livre ?");

  if (confirmDelete) {
    try {
      const res = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // Mettre à jour la liste des livres après la suppression
        books.value = books.value.filter((book) => book._id !== bookId);
      } else {
        console.error("Erreur lors de la suppression du livre");
      }
    } catch (err) {
      console.error("Erreur API admin :", err);
    }
  }
}
</script>
