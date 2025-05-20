import {createRouter, createWebHistory} from 'vue-router'
import ClientBooksList from '../views/client/ClientBooksList.vue'
import ClientBooksDetail from '../views/client/ClientBooksDetail.vue'
import AdminBooksList from '../views/admin/AdminBooksList.vue'
import AdminBooksCreate from '../views/admin/AdminBooksCreate.vue'
import AdminBooksUpdate from '../views/admin/AdminBooksUpdate.vue'

const routes = [
  { path: '/', name: 'home', component: ClientBooksList },
  { path: '/books/:id', name: 'book-detail', component: ClientBooksDetail },
  { path: '/admin/books', name: 'admin-books', component: AdminBooksList },
  { path: '/admin/books/create', name: 'admin-books-create', component: AdminBooksCreate },
  { path: '/admin/books/update/:id', name: 'admin-books-update', component: AdminBooksUpdate }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router