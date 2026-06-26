const frames = document.querySelectorAll('.frame')
let isDown = false;
let startX;
let newScrollLeft;
function sliderFn(e){
  if(e.type == 'mousedown'){
    e.preventDefault();
    isDown = true;
    this.classList.add('active');
    startX = e.pageX - this.offsetLeft;
    newScrollLeft = this.scrollLeft;
  }else if(e.type == 'mouseleave'){
    isDown = false;
    this.classList.remove('active');
  }else if(e.type == 'mouseup'){
    isDown = false;
    this.classList.remove('active');
  }else if(e.type == 'mousemove'){
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - this.offsetLeft;
    const walk = x - startX;
    this.scrollLeft = newScrollLeft - walk;
  }else if(e.type == 'click'){
    const x = e.pageX - this.offsetLeft;
    const walk = x - startX;
    if(walk == 0){
      e.defaultPrevented = false;
    }else{
      e.preventDefault();
      isDown = false;
    }
  }
};
for(frame of frames){
  frame.addEventListener('mousedown', sliderFn);
  frame.addEventListener('mouseleave', sliderFn);
  frame.addEventListener('mouseup', sliderFn);
  frame.addEventListener('mousemove', sliderFn);
  frame.addEventListener('click', sliderFn);
}
const sec2Ul = document.querySelector('.sec2 .frame ul');
const sec2UlLi = document.querySelectorAll('.sec2 .frame ul li');
const sec3Ul = document.querySelector('.sec3 .frame ul');
const sec3UlLi = document.querySelectorAll('.sec3 .frame ul li');
const sec4Ul = document.querySelector('.sec4 .frame ul');
const sec4UlLi = document.querySelectorAll('.sec4 .frame ul li');
const sec5Ul = document.querySelector('.sec5 .frame ul');
const sec5UlLi = document.querySelectorAll('.sec5 .frame ul li');
const sec6Ul = document.querySelector('.sec6 .frame ul');
const sec6UlLi = document.querySelectorAll('.sec6 .frame ul li');
const sec7Ul = document.querySelector('.sec7 .frame ul');
const sec7UlLi = document.querySelectorAll('.sec7 .frame ul li');

function widthFn(ul, li){
  const gap = li[1].offsetLeft - li[0].offsetWidth;
  const ulWidth = li.length*li[0].offsetWidth+(li.length-1)*gap;
  ul.style.width = ulWidth+"px";
}
widthFn(sec2Ul, sec2UlLi);
widthFn(sec3Ul, sec3UlLi);
widthFn(sec4Ul, sec4UlLi);
widthFn(sec5Ul, sec5UlLi);
widthFn(sec6Ul, sec6UlLi);
widthFn(sec7Ul, sec7UlLi);