document.addEventListener('DOMContentLoaded', function() {
    // Example data for classes and tasks
    const classes = [
        { subject: 'Mathematics', time: '10:00 AM' },
        { subject: 'History', time: '12:00 PM' },
        { subject: 'Science', time: '2:00 PM' }
    ];

    const tasks = [
        { name: 'Math Homework', due: 'Due Tomorrow' },
        { name: 'History Essay', due: 'Due Next Monday' },
        { name: 'Science Project', due: 'Due Next Wednesday' }
    ];

    // Function to create and append the cards
    function createCards(dataArray, containerId) {
        const container = document.getElementById(containerId);
        dataArray.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.subject || item.name} - ${item.time || item.due}`;
            container.appendChild(li);
        });
    }

    // Populate the carousels with data
    createCards(classes, 'class-cards');
    createCards(tasks, 'task-cards');

    window.scrollCarousel = function(carouselId, direction) {
        const carousel = document.getElementById(carouselId);
        const track = carousel.querySelector('.carousel-track');
        const cardSize = track.querySelector('li').clientWidth;
        
        // Get the current transform value, or default to 0 if none set yet
        const currentTransform = track.style.transform ? parseInt(track.style.transform.match(/-?\d+/)[0]) : 0;
        
        const numCardsVisible = Math.floor(track.clientWidth / cardSize);
        let scrollAmount = direction === 'right' ? currentTransform - (cardSize * numCardsVisible) : currentTransform + (cardSize * numCardsVisible);
        
        // Ensure that the track doesn't go out of bounds
        const maxScroll = 0;
        const minScroll = -(track.scrollWidth - track.clientWidth);
        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll;
        } else if (scrollAmount < minScroll) {
            scrollAmount = minScroll;
        }
        
        track.style.transform = `translateX(${scrollAmount}px)`;
    };
    
});
