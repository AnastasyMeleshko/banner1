//redirect to Google:

const wrapper = document.getElementById('wrapper');

wrapper.onclick = () => {
    document.location.assign('https://google.com');
}

//text from frame2 animation

const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');

setTimeout(function() {
    frame1.style.display = 'none';
    frame2.style.display = 'block';
}, 8000);



