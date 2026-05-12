
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded successfully');
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevBtn = document.querySelector('.btn-prev');
            if (prevBtn && !prevBtn.classList.contains('disabled')) {
                window.location.href = prevBtn.href;
            }
        } else if (e.key === 'ArrowRight') {
            const nextBtn = document.querySelector('.btn-next');
            if (nextBtn && !nextBtn.classList.contains('disabled')) {
                window.location.href = nextBtn.href;
            }
        }
    });
});
