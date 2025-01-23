// DOM Elements
const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const links = document.querySelectorAll('a[href^="#"]');
const root = document.documentElement;

// Function to toggle sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle('open');
};

// Function to close the sidebar
const closeSidebar = () => {
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
};

// Add smooth scrolling for anchor links
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
      closeSidebar();
    }
  });
});

// Toggle dark/light mode
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
};

// Attach event listeners
menuIcon.addEventListener('click', toggleSidebar);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sidebar.classList.contains('open')) {
    closeSidebar();
  }
});

// Add dark/light mode toggle button
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Toggle Theme';
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.bottom = '20px';
themeToggleButton.style.right = '20px';
themeToggleButton.style.padding = '10px 20px';
themeToggleButton.style.border = 'none';
themeToggleButton.style.borderRadius = '5px';
themeToggleButton.style.backgroundColor = '#64ffda';
themeToggleButton.style.color = '#121212';
themeToggleButton.style.cursor = 'pointer';
themeToggleButton.addEventListener('click', toggleTheme);
document.body.appendChild(themeToggleButton);
