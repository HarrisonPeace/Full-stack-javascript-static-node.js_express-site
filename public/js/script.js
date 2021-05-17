
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

const root = document.querySelector(':root');
const displayStyleButton =  document.querySelector('#display-style-button')
const displayStyleForm =  document.querySelector('#display-style-form')

function changeDisplayStyle(displayStyle) {
  if (displayStyle === 'light' || !displayStyle) {
    root.style.setProperty('--color-main-light', '#fefefe');
    root.style.setProperty('--color-main-dark', '#0a0a0a');
    root.style.setProperty('--bg-color-button', '#333');
    root.style.setProperty('--text-color-p', '#666');
    root.style.setProperty('--text-color-a', '#555');
    root.style.setProperty('--text-color-light-grey', '#a7a7a7');
    root.style.setProperty('--color-box-shadow', 'rgba(38,38,38,0.79)');
    displayStyleButton.innerHTML = 'Swap to DARK MODE';
    displayStyleButton.setAttribute("value", "dark")
  } else {
    root.style.setProperty('--color-main-light', '#0a0a0a');
    root.style.setProperty('--color-main-dark', '#fefefe');
    root.style.setProperty('--bg-color-button', '#ebebeb');
    root.style.setProperty('--text-color-p', '#666');
    root.style.setProperty('--text-color-a', '#555');
    root.style.setProperty('--text-color-light-grey', '#a7a7a7');
    root.style.setProperty('--color-box-shadow', '#0a0a0a');
    displayStyleButton.innerHTML = 'Swap to LIGHT MODE';
    displayStyleButton.setAttribute("value", "light")
  }
}