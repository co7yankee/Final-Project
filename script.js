document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarContainer = document.getElementById('sidebar-container');

    menuToggle.addEventListener('click', () => {
        sidebarContainer.classList.toggle('open');
    });
});
