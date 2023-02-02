const apiUrl = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';

axios.get(apiUrl).then((res) => {
  // 取得遠端資料
})

const App = {
  data() {
    return {
      spots: [],
      selectedSpot: '',
      cachedSearch: '',
      browseLog: [],
    };
  },

  methods: {
    getData(url) {
      axios.get(url).then((response) => {
        this.spots = response.data.result.records;
      });
    },

    onSpotSelected(spot) {
      this.selectedSpot = spot;
    },

    getDuplicateIndex(spot) {
      for (i = 0; i < this.browseLog.length; i ++) {
        if (this.browseLog[i].Name === spot.Name) return i;
      }

      return -1;
    }
  },

  computed: {
    filterSearch() {
      return this.spots.filter((spot) => spot.Name.match(this.cachedSearch));
    }
  },
  // 如果曾經瀏覽過這個景點，就把這個景點從瀏覽紀錄移除。
  // （所以這個景點會呈現在最新的一筆上，舊的紀錄則會消失）
  // 保持瀏覽紀錄為 10 筆。

  watch: {
    selectedSpot() {
      let dupIndex = this.getDuplicateIndex(this.selectedSpot);

      if (dupIndex >= 0) {
        this.browseLog.splice(dupIndex, 1);
      }

      if (this.browseLog.length >= 10) {
        this.browseLog.shift();
      }

      this.browseLog.push(this.selectedSpot);
    }
  },

  created() {
    const spotsApiUrl = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';
    this.getData(spotsApiUrl);
  }
};

Vue.createApp(App).mount('#app');