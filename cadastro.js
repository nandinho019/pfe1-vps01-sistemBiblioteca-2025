document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

    
        const titulo = bookForm['titulo'].value;
        const autor = bookForm['autor'].value;
        const ano = bookForm['ano'].value;
        const editora = bookForm['editora'].value;
        const genero = bookForm['genero'].value;
        const descricao = bookForm['descricao'].value;

        
        const newBook = { titulo, autor, ano, editora, genero, descricao };

        
        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));

        alert('Livro cadastrado com sucesso!');
        bookForm.reset();
    });
});