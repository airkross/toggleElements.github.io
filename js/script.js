var list = document.getElementById('list');
var item = list.getElementsByClassName('item');
var addBtn = document.getElementsByClassName('main-btn_add');
var delBtn = document.getElementsByClassName('main-btn_delete');
var popup = document.getElementsByClassName('container-popup')[0];

function addItem() {
  var newLi = document.createElement('li');
  newLi.className = 'item';
  newLi.innerHTML = 'Пункт задания';
  list.appendChild(newLi);
}

function deleteItem() {
  if(item.length == 1||item.length == 0) {
    popup.style.display = 'block';
  }
  list.removeChild(item[0]);
}

function closePopup() {
  popup.style.display = 'none';
  console.log('1');
}