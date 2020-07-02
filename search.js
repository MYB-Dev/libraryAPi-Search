var app = new Vue({
  el: '#app',
  data: {
    type: '',
    search: '',
    books: [],
    loading: false,
  },
  methods: {
    submit(e) {
      try {
        fetch(
          `https://myb-library-api.herokuapp.com/api/books/search?${this.type}=${this.search}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.books = data;
            console.log(data);
          })
          .then(() => {
            this.loading = false;
          });
      } catch (err) {
        console.log(err);
      }
      this.loading = true;
      this.search = '';
      this.type = '';
      e.preventDefault();
    },
  },
});
