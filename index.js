//Redirect to Google:

const wrapper = document.getElementById('wrapper');

wrapper.onclick = () => {
    document.location.assign('https://google.com');
}

//For text animation:

const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');

setTimeout(function() {
    frame1.style.display = 'none';
    frame2.style.display = 'block';
}, 8000);

//Preloader:

// Remove "loaded" class to show preloader
document.documentElement.classList.remove('loaded');

// Add "loaded" class after content is fully loaded
window.addEventListener('load', function() {
    setTimeout(() => {
        document.documentElement.classList.add('loaded');
    },2000)
});

