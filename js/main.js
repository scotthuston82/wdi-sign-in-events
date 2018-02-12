var signin = document.querySelector('.signin');
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
var submit = document.querySelector('.submit');
var input1 = document.querySelector('#user');
var input2 = document.querySelector('#pass');

signin.addEventListener('click', function(){
  modal.style.display = 'block';
});

close.addEventListener('click', function(){
  modal.style.display = 'none';
});

submit.addEventListener('click', function(){
 input1.classList.add('error');
 input2.classList.add('error');
});

input1.addEventListener('click', function(){
  input1.classList.remove('error');
});

input2.addEventListener('click', function(){
  input2.classList.remove('error');
});
