const sec1Ul = document.querySelector('.sec1 ul');
const sec1UlLi = document.querySelectorAll('.sec1 ul li a');
const popup = document.querySelector('#popup');
const popupBack = document.querySelector('.popup-back');
const closeBtn = document.querySelector('.close-btn img')
sec1Ul.addEventListener('click', function(e){
  e.preventDefault();
  sec1UlLi.forEach((el, idx)=>{
    if(e.target == el.firstElementChild || e.target == el.lastElementChild){
      popupBack.style.display = "block";
      popup.classList.add('up');
      document.body.classList.add('pop-up');
    }
  })
});
closeBtn.addEventListener('click', function(e){
  popupBack.style.display = "none";
  popup.classList.remove('up');
  document.body.classList.remove('pop-up');
});