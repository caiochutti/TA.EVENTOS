// script.js for TA.EVENTOS
// basic interactivity: slideshow and form handling

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // slideshow
    const slides = document.querySelectorAll('.slides');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(0);
        setInterval(nextSlide, slideInterval);
    }

    // form submission (AJAX) - placeholder for later API integration
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // prevent default Formspree behaviour

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => (data[key] = value));

            // for now we just log the data to the console
            console.log('Form data ready to send:', data);

            // TODO: change URL to your actual API endpoint when it's ready
            fetch('/api/orcamento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(result => {
                alert('Pedido enviado com sucesso!');
                form.reset();
            })
            .catch(error => {
                console.error('Erro ao enviar orçamento:', error);
                alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
            });
        });
    }

    // smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});