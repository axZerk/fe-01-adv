'use strict';

// document.addEventListener('keyup', function(evt) {
//   console.log(evt.code);
// });

/**
 * Скрол не работал потому что у нас нечего скролить :D
 * сделайте больше контента и будет выстреливать ивент скрола :)
 */
// window.addEventListener('scroll', function(evt) {
//   console.log('qweqwe');
// });

document.addEventListener('DOMContentLoaded', function(evt) {
  const addGroupBtn = document.querySelector('.js-add-group');
  const groupList = document.querySelector('.js-group-list');



  addGroupBtn.addEventListener('click', function(evt) {
    const group = makeGroup();

    groupList.append(group);
  });

  groupList.addEventListener('click', handleGroupListClick);
});

function handleGroupListClick(evt) {
  const target = evt.target;
  const nodeName = target.nodeName;
  const parentNode = target.parentNode;
  const type = target.dataset.type;

  if (nodeName === 'BUTTON' && type === 'del') {
    parentNode.remove();
  }
}

function makeGroup() {
  const li = document.createElement('li');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');

  const btn = document.createElement('button');
  btn.textContent = '-';
  btn.dataset.type = 'del';

  li.append(input, btn);

  return li;
}
