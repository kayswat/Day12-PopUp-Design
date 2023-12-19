const popupBtn = document.querySelector('.btn');
const closePopupBtn = document.querySelector('.closeBtn');
const popup = document.querySelector('.popup');

function openPopup(){
popup.classList.add('open-popup');
}


function closePopup(){
    popup.classList.remove('open-popup');
}


popupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click',closePopup);