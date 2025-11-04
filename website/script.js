// Technology Odyssey Website Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 300);
    });
    
    // Add click tracking
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link clicked:', this.href);
        });
    });
});
