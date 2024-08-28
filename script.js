// script.js
document.getElementById('github').style.display = 'block';


document.getElementById('experience-btn').addEventListener('click', function() {
    document.getElementById('experience').style.display = 'block';
    document.getElementById('interests').style.display = 'none';
    document.getElementById('github').style.display = 'none';
});

document.getElementById('interests-btn').addEventListener('click', function() {
    document.getElementById('experience').style.display = 'none';
    document.getElementById('interests').style.display = 'block';
    document.getElementById('github').style.display = 'none';
});

document.getElementById('github-btn').addEventListener('click', function() {
    document.getElementById('experience').style.display = 'none';
    document.getElementById('interests').style.display = 'none';
    document.getElementById('github').style.display = 'block';
});