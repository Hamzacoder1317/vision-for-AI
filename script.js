

const scrollLine = document.querySelector(".scroll-line");

window.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
    const progressLine = document.getElementById('progressLine');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressLine.style.width = scrollPercentage + '%';
};

