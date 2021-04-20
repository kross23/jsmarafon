import {createElement} from './createElement.js';

const $arenas = document.querySelector('.arenas');
const $form = document.querySelector('.control');

export const createReloadButton = (pl1, pl2) => {
    const $reloadButtonDiv = createElement('div','reloadWrap');
    const $reloadButton = createElement('button','button');
    $reloadButton.innerText = 'reload';
    $reloadButton.addEventListener('click',() => {
        $form[6].disabled = false;
        pl1.hp = 100;
        pl2.hp = 100;
        pl1.renderHP();
        pl2.renderHP();
        
        const $WinTitle = document.querySelector('.winTitle');
        $arenas.removeChild($WinTitle);
        $arenas.removeChild($reloadButtonDiv);
    });
    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);
}