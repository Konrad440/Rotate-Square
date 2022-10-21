
  let rotate = 0;

  const deg = 10;


  const btn = document.querySelector('button');
  const div = document.querySelector('.square');

//   div.style.transition = ".5s";

  btn.addEventListener('click', function (){
    rotate = rotate + deg;
    div.style.transform = "rotate(" + rotate + "deg)";
    div.classList.add("animation");
  }); 

  


