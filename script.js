document.addEventListener('DOMContentLoaded', function() {
    function createCards(dataArray, containerId) {
        const container = document.getElementById(containerId);
        dataArray.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.subject || item.name} - ${item.time || item.due}`;
            container.appendChild(li);
        });
    }
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
    function scrollCarousel(carouselId, direction) {
        const carousel = document.getElementById(carouselId);
        const track = carousel.querySelector('.carousel-track');
        const card = track.querySelector('li');

        const cardSize =
            card.clientWidth +
            parseInt(window.getComputedStyle(card).marginRight) +
            parseInt(window.getComputedStyle(card).marginLeft); // Width of one card including margins

        let currentTransform = track.style.transform
            ? parseInt(track.style.transform.match(/-?\d+/)[0])
            : 0;
        const maxScroll = 0;
        const minScroll = -(track.scrollWidth - track.clientWidth);

        let scrollAmount =
            direction === 'right'
                ? currentTransform - cardSize
                : currentTransform + cardSize;
        scrollAmount = Math.max(minScroll, Math.min(maxScroll, scrollAmount)); // Ensure scroll remains within bounds

        track.style.transform = `translateX(${scrollAmount}px)`;
    }

    // Populate the carousels with data
    const classes = [
      
    ];

    const tasks = [
    
    ];

    const profileCourses = [
        
    ];

    createCards(classes, 'class-cards');
    createCards(tasks, 'task-cards');
    createCards(profileCourses, 'profile-cards');

    // Attach event listeners to buttons
    const allCarouselControls = document.querySelectorAll('.carousel-control');

    allCarouselControls.forEach(button => {
        button.addEventListener('click', function() {
            const carouselId = this.parentElement.id;
            const direction = this.classList.contains('left') ? 'left' : 'right';
            scrollCarousel(carouselId, direction);
        });
    });
});
