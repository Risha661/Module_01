'use strict';

const propsLists = document.querySelectorAll('.item');
const propsItem = document.querySelectorAll('.props__item');
console.log(propsItem);

propsLists[0].before(propsLists[1]);
propsLists[2].after(propsLists[0]);
propsLists[3].after(propsLists[0]);

const propsListItem = document.querySelectorAll('.props__list');
console.log(propsListItem);
const cloneElem4 = propsListItem[4].cloneNode(true);
const cloneElem2 = propsListItem[2].cloneNode(true);
propsListItem[4].prepend(cloneElem2);
propsListItem[2].prepend(cloneElem4);

propsItem[2].after(propsItem[14]);
propsItem[20].remove();
propsItem[21].remove();
propsItem[22].remove();
propsItem[23].remove();
propsItem[24].remove();
propsItem[25].remove();
propsItem[26].remove();
propsItem[27].remove();
propsItem[28].remove();
propsItem[29].remove();
propsItem[30].remove();
propsItem[31].remove();
propsItem[32].remove();
propsItem[33].remove();
propsItem[34].remove();

propsItem[19].after(propsItem[44]);
propsItem[19].after(propsItem[43]);

const titleH2 = document.querySelectorAll('.item__title');
console.log(titleH2);

const cloneTitle0 = titleH2[0].cloneNode(true);
const cloneTitle4 = titleH2[4].cloneNode(true);
const cloneTitle2 = titleH2[2].cloneNode(true);
titleH2[0].before(cloneTitle2);
titleH2[4].before(cloneTitle0);
titleH2[3].before(cloneTitle4);

titleH2[0].remove();
titleH2[4].remove();
titleH2[3].remove();

titleH2[1].textContent = 'This и прототипы объектов';
cloneTitle2.textContent = 'Область видимости и замыкание';


