import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "firebase/firestore";

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyDXHNHORmcD22CifjZyK0u1Slvk51FTPak",
  authDomain: "vue-firestore-d70ef.firebaseapp.com",
  projectId: "vue-firestore-d70ef",
  storageBucket: "vue-firestore-d70ef.appspot.com",
  messagingSenderId: "591966284898",
  appId: "1:591966284898:web:8e7eb58b8e3e646531753b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
