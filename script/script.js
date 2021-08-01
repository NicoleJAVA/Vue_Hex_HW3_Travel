const apiUrl = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';

axios.get(apiUrl).then((res) => {
  // 取得遠端資料
})

const App = {
  data() {
    return {
      spots: [],
      cacheArea: '',
      cacheSearch: '',
      browseLog: [],
    };
  },

  methods: {
    getData(url) {
      axios.get(url).then((response) => {
        this.spots = response.data.result.records;
      });
    }
  },

  created() {
    const spotsApiUrl = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';
    this.getData(spotsApiUrl);
  }
};

Vue.createApp(App).mount('#app');