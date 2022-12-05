import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const baseurl = "https://backend-shorten.vercel.app";

export const useApp = defineStore({
  id: "App",
  state: () => ({
    urls: [],
    url_original: "",
    url_short: "",
    url_click: 0,
    temp: "",
    token:
      "",
  }),
  actions: {
    async getUrls() {
      await this.getToken();
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios.get(baseurl + "/getshorten", config).then((res) => {
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
      axios.delete(baseurl + "/deleteshorten/" + id, config).then((res) => {
        console.log("Deleted");
        this.getUrls();
      });
    },

    async redirect(url) {
      window.location.href = url;
    },

    async getSpecificUrl(customurl) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios.get(baseurl + "/go/" + customurl, config).then((res) => {
        this.temp = res.data;
        this.redirect(this.temp.url);
        console.log(this.temp);
        this.temp = "";
      });
    },

    async getToken() {
      await axios.post(baseurl + "/login", {
        email: "rama@gov.id",
        password: "tesasasat",
      }).then((res) => {
        this.token = res.data.accestoken;
        console.log(res.data.accestoken);
      });
      
    
    },
  },
});
