
document.addEventListener('DOMContentLoaded', () => {
    

    const toggleBtn = document.getElementById('theme-toggle');
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            toggleBtn.textContent = '☀️ Modo Oscuro';
        } else {
            toggleBtn.textContent = '🌙 Modo Claro';
        }
    });

    
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            alert(`¡Genial! Has seleccionado la habilidad: ${tag.textContent}`);
        });
    });
});