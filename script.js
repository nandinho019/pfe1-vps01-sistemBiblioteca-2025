document.addEventListener('DOMContentLoaded', () => {
    const detailButtons = document.querySelectorAll('.detail-btn');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalStatus = document.getElementById('modal-status');
    const modalYear = document.getElementById('modal-year');
    const modalPublisher = document.getElementById('modal-publisher');
    const modalGenre = document.getElementById('modal-genre');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-btn');
  
    detailButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
  
            const title = card.querySelector('h3').textContent;
            const author = card.querySelector('p strong').textContent;
            const status = card.querySelector('p:nth-of-type(2)').textContent;
            const year = card.getAttribute('data-year');
            const publisher = card.getAttribute('data-publisher');
            const genre = card.getAttribute('data-genre');
            const description = card.getAttribute('data-description');
  
            modalTitle.textContent = `Título: ${title}`;
            modalAuthor.textContent = `Autor: ${author}`;
            modalYear.textContent = `Ano: ${year}`;
            modalPublisher.textContent = `Editora: ${publisher}`;
            modalGenre.textContent = `Gênero: ${genre}`;
            modalDescription.textContent = `Descrição: ${description}`;
  
            modal.classList.add('visible');
        });
    });
  
    closeModal.addEventListener('click', () => {
        modal.classList.remove('visible');
    });
  
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('visible');
        }
    });
  
    // Validação e registro do formulário de locação
    document.getElementById('rental-form').addEventListener('submit', function (event) {
        event.preventDefault();
  
        const rentalData = {
            bookTitle: document.getElementById('book-title').value,
            renterName: document.getElementById('renter-name').value,
            cpf: document.getElementById('cpf').value,
            rentalDate: document.getElementById('rental-date').value,
            returnDate: document.getElementById('return-date').value,
        };
  
        // Validação do CPF: deve ter exatamente 11 dígitos numéricos
        if (!/^\d{11}$/.test(rentalData.cpf)) {
            alert('CPF inválido! Certifique-se de que possui exatamente 11 dígitos numéricos.');
            return;
        }
  
        // Salvar no LocalStorage
        const rentals = JSON.parse(localStorage.getItem('rentals')) || [];
        rentals.push(rentalData);
        localStorage.setItem('rentals', JSON.stringify(rentals));
  
        alert('Locação registrada com sucesso!');
        this.reset();
    });
  });