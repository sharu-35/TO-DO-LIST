const input = document.getElementById('listinput');
const button = document.getElementById('btn');
const list1 =document.getElementById('contant');

button.addEventListener('click',textinfo);

function textinfo(){
  const textinput = input.value;
  const create = document.createElement('li');
  create.textContent=textinput;
  list1.appendChild(create);
  textinput.value='';
}
