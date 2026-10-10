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
                    border: '#e5e5e5',
                },
            },
        },
    },
};

const CAROUSEL_SCROLL_DISTANCE = 264;

function initCarousel(trackId, previousButtonId, nextButtonId) {
    const track = document.getElementById(trackId);
    const previousButton = document.getElementById(previousButtonId);
    const nextButton = document.getElementById(nextButtonId);

    if (!track || !previousButton || !nextButton) return;

    nextButton.addEventListener('click', () => {
        track.scrollBy({
            left: CAROUSEL_SCROLL_DISTANCE,
            behavior: 'smooth',
        });
    });

    previousButton.addEventListener('click', () => {
        track.scrollBy({
            left: -CAROUSEL_SCROLL_DISTANCE,
            behavior: 'smooth',
        });
    });

    track.addEventListener('scroll', () => {
        previousButton.classList.toggle('opacity-50', track.scrollLeft <= 0);
        previousButton.classList.toggle('cursor-not-allowed', track.scrollLeft <= 0);

        const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
        nextButton.classList.toggle('opacity-50', isAtEnd);
        nextButton.classList.toggle('cursor-not-allowed', isAtEnd);
    });

    track.dispatchEvent(new Event('scroll'));
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchBtn');
    const searchResult = document.getElementById('searchResult');

    if (!searchInput || !searchButton || !searchResult) return;

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();

        if (!searchTerm) {
            searchResult.classList.add('hidden');
            return;
        }

        const highlightedTerm = document.createElement('strong');
        highlightedTerm.textContent = `'${searchTerm}'`;
        searchResult.replaceChildren(
            document.createTextNode('Você buscou por: '),
            highlightedTerm,
        );
        searchResult.classList.remove('hidden');
    });

    searchInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') searchButton.click();
    });
}

function initNavigationMenus() {
    const categoriesToggle = document.getElementById('categoriesMenuToggle');
    const categoriesMenu = document.getElementById('categoriesMenu');
    const departmentMenu = document.getElementById('departmentMenu');
    const departmentToggles = [...document.querySelectorAll('.department-menu-toggle')];

    if (!categoriesToggle || !categoriesMenu || !departmentMenu || departmentToggles.length === 0) return;

    function closeMenus() {
        categoriesMenu.classList.add('hidden');
        departmentMenu.classList.add('hidden');
        categoriesToggle.setAttribute('aria-expanded', 'false');
        departmentToggles.forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
    }

    categoriesToggle.addEventListener('click', event => {
        event.preventDefault();
        const shouldOpen = categoriesMenu.classList.contains('hidden');

        closeMenus();
        if (!shouldOpen) return;

        categoriesMenu.classList.remove('hidden');
        categoriesToggle.setAttribute('aria-expanded', 'true');
    });

    departmentToggles.forEach(toggle => {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            const shouldOpen = departmentMenu.classList.contains('hidden');

            closeMenus();
            if (!shouldOpen) return;

            departmentMenu.classList.remove('hidden');
            toggle.setAttribute('aria-expanded', 'true');
        });
    });

    document.addEventListener('click', event => {
        const target = event.target;
        const clickedCategoriesMenu = categoriesToggle.contains(target) || categoriesMenu.contains(target);
        const clickedDepartmentMenu = departmentMenu.contains(target)
            || departmentToggles.some(toggle => toggle.contains(target));

        if (!clickedCategoriesMenu && !clickedDepartmentMenu) closeMenus();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenus();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel('carouselTrack1', 'prevBtn1', 'nextBtn1');
    initCarousel('carouselTrack2', 'prevBtn2', 'nextBtn2');
    initSearch();
    initNavigationMenus();
});