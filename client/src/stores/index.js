import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   onSnapshot,
//   getDocs,
// } from "firebase/firestore";
// import Swal from 'sweetalert2';

// // isikan firebaseConfig disini
// const firebaseConfig = {
//   apiKey: "AIzaSyDXHNHORmcD22CifjZyK0u1Slvk51FTPak",
//   authDomain: "vue-firestore-d70ef.firebaseapp.com",
//   projectId: "vue-firestore-d70ef",
//   storageBucket: "vue-firestore-d70ef.appspot.com",
//   messagingSenderId: "591966284898",
//   appId: "1:591966284898:web:8e7eb58b8e3e646531753b"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

export const useApp = defineStore({
  id: "App",
  state: () => ({
    urls: [],
    url_original: "",
    url_short: "",
    url_click: 0,
    temp: "",
    token:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1MWMwOGM1MTZhZTM1MmI4OWU0ZDJlMGUxNDA5NmY3MzQ5NDJhODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZnAtcHdlYi0yYmRlMCIsImF1ZCI6ImZwLXB3ZWItMmJkZTAiLCJhdXRoX3RpbWUiOjE2NzAyMTM5NDksInVzZXJfaWQiOiJ5TGZsN2dTM29NVmI3c1o0MjNmeGx6SXdTR3kxIiwic3ViIjoieUxmbDdnUzNvTVZiN3NaNDIzZnhsekl3U0d5MSIsImlhdCI6MTY3MDIxMzk0OSwiZXhwIjoxNjcwMjE3NTQ5LCJlbWFpbCI6InJhbWFAZ292LmlkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJhbWFAZ292LmlkIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.MbO_uhLFOvTDBOBl5S71-jT840cez4WRcmMVFWBWMjs41Q-fGU5JxUnB3NntJrXOncMmwfzmGQpF7OBTPLGTCBuU3-yK8Ns1iYNp7jTPDFYPCgS0qRsB4qkTzwBPAO2CUNk33DvHZUg0sOXi-ZBUFAIOND0ybe7Yumq8dRAu8aDZcy3pNbfmnF8ne9l3wqU7Pe-baa_ijuMlhsIpDipb1uT9DBTWcS1hgRudQEQ6Osnx7QPgsT58mxOi7_XaFFUu9eq2MRtZ3Pcau84zPNBmA4Fe7uBhWpWXH7W1CbSpF3fXAzGq7w5voknkPdM04IXxHuRveBRpsjlcOfaKJ2lKnQ",
  }),
  actions: {
    async getUrls() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios.get("http://192.168.88.18:3000/getshorten", config).then((res) => {
        this.urls = res.data.data;
        console.log(this.urls);
      });
    },

    async deleteUrl(id) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios.delete("http://192.168.88.18:3000/deleteshorten/"+id, config).then((res) => {
        console.log("Deleted");
        this.getUrls();
      });
    },

    async redirect(url){
      window.location.href = url;
    },

    async getSpecificUrl(customurl){
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios.get("http://192.168.88.18:3000/go/"+customurl, config).then((res) => {
        this.temp = res.data;
        this.redirect(this.temp.url);
        console.log(this.temp  );
        this.temp = "";
      })}
  },
});
