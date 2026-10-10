        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        avanti: {
                            blue: '#0055ff',
                            light: '#f4f4f4',
                            dark: '#1a1a1a',
                            gray: '#888888',
                            border: '#e5e5e5'
                        }
                    }
                }
            }
        }

// Função utilitária para inicializar a lógica do carrossel com rolagem suave
        function initCarousel(trackId, prevBtnId, nextBtnId) {
            const track = document.getElementById(trackId);
            const prevBtn = document.getElementById(prevBtnId);
            const nextBtn = document.getElementById(nextBtnId);

            if (!track || !prevBtn || !nextBtn) return;

            // Largura de um card + gap (aproximadamente 240px + 24px)
            const scrollAmount = 264; 

            nextBtn.addEventListener('click', () => {
                track.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            prevBtn.addEventListener('click', () => {
                track.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            // Lógica opcional para esconder/mostrar setas baseada no scroll (simples)
            track.addEventListener('scroll', () => {
                if (track.scrollLeft <= 0) {
                    prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }

                if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
                    nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });

            // Disparo inicial para checar o estado
            track.dispatchEvent(new Event('scroll'));
        }

        function initSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const searchResult = document.getElementById('searchResult');

            if (searchInput && searchBtn && searchResult) {
                searchBtn.addEventListener('click', () => {
                    const searchTerm = searchInput.value.trim();
                    if (searchTerm) {
                        searchResult.innerHTML = `Você buscou por: <strong>'${searchTerm}'</strong>`;
                        searchResult.classList.remove('hidden');
                    } else {
                        searchResult.classList.add('hidden');
                    }
                });

                // Permite buscar também pressionando a tecla 'Enter'
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        searchBtn.click();
                    }
                });
            }
        }

        // Inicializa carrosséis e busca quando a página carregar
        document.addEventListener('DOMContentLoaded', () => {
            initCarousel('carouselTrack1', 'prevBtn1', 'nextBtn1');
            initCarousel('carouselTrack2', 'prevBtn2', 'nextBtn2');
            initSearch();
        });