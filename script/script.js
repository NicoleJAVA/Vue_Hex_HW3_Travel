const apiUrl = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json';

axios.get(apiUrl).then((res) => {
  // 取得遠端資料
})

const App = {
  data() {
    return {
      datastore: {
        "Ticketinfo": "免費參觀",
        "Zone": "三民區",
        "Px": "120.32707",
        "Py": "22.6727",
        "Add": "高雄市三民區鼎金後路461巷",
        "Gov": "397000000A",
        "Class2": null,
        "Class1": "2",
        "Website": "",
        "Opentime": "全天候開放",
        "Description": "狹長型的檨仔林埤濕地公園位於高雄市三民區，鼎金後路與鼎金系統交流道之間，是高雄市近年來整治成功，兼具滯洪、防洪、休閒教育與生態功能的埤塘濕地公園之一。園區北側有「生態密林區」，茂密的原生檨仔樹林如同都市之肺，可以阻隔、緩衝北側高速公路對生態與環境造成的干擾; 「生態維持區」則將原有地形疏浚深化，形成生態浮島與水域栽培育區，遍植野薑花、慈菇、香蒲等水生植物，利用生態池水體自淨機制淨化水質。清新的環境與自然的綠意，吸引水鳥與生物棲息，腳踏車道與林蔭綠意提供遊人休憩放鬆的清淨角落，也是高雄市美麗的後花園。",
        "Remarks": "",
        "Parkinginfo_py": "0",
        "Parkinginfo_px": "0",
        "Name": "檨仔林埤濕地公園",
        "Level": null,
        "Picture1": "https://raw.githubusercontent.com/hexschool/KCGTravel/master/image/%E4%B8%89%E6%B0%91%E5%8D%80/%E6%AA%A8%E4%BB%94%E6%9E%97%E5%9F%A4%E6%BF%95%E5%9C%B0%E5%85%AC%E5%9C%9201.jpg",
        "Toldescribe": "狹長型的檨仔林埤濕地公園位於高雄市三民區，鼎金後路與鼎金系統交流道之間，是高雄市近年來整治成功，兼具滯洪、防洪、休閒教育與生態功能的埤塘濕地公園之一。園區北側有「生態密林區」，茂密的原生檨仔樹林如同都市之肺，可以阻隔、緩衝北側高速公路對生態與環境造成的干擾; 「生態維持區」則將原有地形疏浚深化，形成生態浮島與水域栽培育區，遍植野薑花、慈菇、香蒲等水生植物，利用生態池水體自淨機制淨化水質。清新的環境與自然的綠意，吸引水鳥與生物棲息，腳踏車道與林蔭綠意提供遊人休憩放鬆的清淨角落，也是高雄市美麗的後花園。",
        "Changetime": "2015-06-02T14:03:30",
        "Tel": "886-7-7995678",
        "Picdescribe1": "檨仔林埤濕地公園",
        "Travellinginfo": "",
        "_id": 3,
        "Id": "C1_397000000A_000011"
      },
      cacheArea: '',
      cacheSearch: '',
      browseLog: [],
    };
  },
};

Vue.createApp(App).mount('#app');