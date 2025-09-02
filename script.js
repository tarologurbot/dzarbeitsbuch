

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('close')[0];


function openModal(src) {
modal.style.display = 'block';
modalImg.src = src;
}


closeBtn.onclick = function() {
modal.style.display = 'none';
}


window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
}