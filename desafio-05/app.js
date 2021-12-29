new Vue({
    el: '#app',
    data: {
        infos: null, 
        search: "",
        region: "",
        noResults: false,
        details: false,
        countryDetail: null
    },
    mounted () {
        axios
          .get('https://restcountries.com/v3.1/all')
          .then(response => (this.infos = response.data))
          .catch(error => (this.infos = null))
    },
    methods: {
        showDetails(name){
            axios
                .get("https://restcountries.com/v2/name/"+name+"?fullText=true")
                .then(response => (this.countryDetail = response.data))
                .catch(error => (this.countryDetail = null))
                .finally(() => this.details = true)
        },
        back(){
            location.reload();
        }
    },
    watch: {
        search(newValue, oldValue){
            if(newValue == ""){
                link = 'https://restcountries.com/v3.1/all'
            } else {
                link = 'https://restcountries.com/v3.1/name/'+newValue;
            }
            axios
              .get(link)
              .then(response => (this.infos = response.data))
              .catch(error => (this.infos = null))
        },
        region(newValue, oldValue){
            if(newValue == ""){
                link = 'https://restcountries.com/v3.1/all'
            } else {
                link = 'https://restcountries.com/v3.1/region/'+newValue;
            }
            axios
              .get(link)
              .then(response => (this.infos = response.data))
              .catch(error => console.log(error) )
        },
        infos(newValue, oldValue){
            if(newValue == null) {
                this.noResults = true;
            } else {
                this.noResults = false;
            }
        }
    }
});

const $html = document.querySelector('html');
const $checkbox = document.querySelector('#checkbox');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})