// script.js
document.getElementById('github').style.display = 'block';

document.getElementById('interests-btn').addEventListener('click', function() {
    document.getElementById('interests').style.display = 'block';
    document.getElementById('github').style.display = 'none';
});

document.getElementById('github-btn').addEventListener('click', function() {
    document.getElementById('interests').style.display = 'none';
    document.getElementById('github').style.display = 'block';
});