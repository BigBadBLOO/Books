var app = new Vue({
    el: '#app',
    data: {
        newBook: [],
	    books: [
	      { author: 'Автор1', title: 'Совершенный код', image_url:'images/1.jpg', year: '1995'},
	      { author: 'Автор2', title: 'Введение в машинное обучение', image_url:'images/2.jpg', year: '1991' },
	      { author: 'Автор3', title: 'Философия и мировозрение', image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOyeSC2mZRULiWx7Qxf42-dJJXhlWOORlijiNoEM0Mcwkueu53A', year: '2017' }
	    ]
  
    },
    methods: {
        addBook: function(){
            if (this.newBook.year > 2017){
                document.getElementById('error').classList.remove('hidden');
            }
            else {
                this.books.push({author: this.newBook.author, title: this.newBook.title, image_url: this.newBook.image_url, year: this.newBook.year});
                document.getElementById('error').classList.add('hidden');
            }
           
        },
        updateBook: function(index){
            var year = document.getElementById('id_year_'+index+'').value;
            if (year > 2017){
                document.getElementById('error_'+index+'').classList.remove('hidden');
            }
            else {
                document.getElementById('error_'+index+'').classList.add('hidden');
                Vue.set( this.books,index, {author:  document.getElementById('id_author_'+index+'').value, 
                                        title: document.getElementById('id_title_'+index+'').value, 
                                        image_url: document.getElementById('id_url_'+index+'').value, 
                                        year: year});
            }
                
        }
    },  
});