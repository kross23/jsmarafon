'use strict';
//import {logs} from './logs';
const $arenas = document.querySelector('.arenas');
const $form = document.querySelector('.control');
const $chat = document.querySelector('.chat');
class Players{
    elementLife ='';
    constructor(name,hp,src,weapon,player){
this.name = name;
this.player=player;
this.hp = hp;
this.weapon = weapon;
this.img = src;
}; 
    attack(){
        console.log('atack  '+this.name+'  atack');
    };
     changeHP(n) {
         if(this.hp - n <= 0){
            this.hp=0;
            return 0;
         }else{
            this.hp -= n;
            return this.hp;
         }
    };
    elHP ()  {
         this.elementLife = document.querySelector(`.player${this.player} .life`);
         
    }
     renderHP(){
        this.elementLife.style.width =`${this.hp}%`;
    }

};
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const pl1 = new Players('chelovek',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['pistol','automat'],1);
const pl2 = new Players('valentyn',100,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['pistol','automat'],2);

//console.log('time: ', time);

//console.log('time: ', time.getHours(),':',time.getMinutes(),'.',time.getSeconds());
const createElement = (tag,className ) => {
const $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    return $tag;
}
const enemyAttack = () => {
    const enemy={
        'hit':'',
        'defence':{}
    
    }
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
            enemy.hit =  'head';
            break;
        case 2:
            enemy.hit =  'body';
            break;
        case 3 :
            enemy.hit =  'foot';
        default:
            break;
    }
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
            enemy.defence = {'head' :  true};
            break;
        case 2:
            enemy.defence = {'body' :  true};
            break;
        case 3 :
            enemy.defence = {'foot' :  true};
        default:
            break;
    }
return enemy;
  };
const playerAtack = () => {
    const obj={
        hit:'',
        defence:{},
    
    };
       for (let value of  $form){
           const item = value;
            if(value.name === 'hit' && item.checked){
             obj.hit = item.value;
             
             }else if(value.name === 'defence' && item.checked )
             {     
               obj.defence[item.value] = item.checked; 
             }
             item.checked=false;
        };

        return obj;
}

const createPlayer=({name, hp, img, player}) => {
    const $player = createElement('div',`player${player}` );
    const $ilemProgrBar = createElement('div','progressbar' )
    const $life = createElement('div','life'); // 2
    const $name = createElement('div','name');//2
    const $character = createElement('div','character');
    $character.innerHTML=`<img src=${img} />`;
    $name.textContent= name;
    $life.style.width = `${hp}%`;

    $ilemProgrBar.appendChild($life);
    $ilemProgrBar.appendChild($name);
    $player.appendChild($ilemProgrBar);
    $player.appendChild($character);
    return $player;
};

function playerWin(name='drawe'){
    const $WinTitle = createElement('div','winTitle');
        $WinTitle.textContent =`win ${name}`;
    $arenas.appendChild($WinTitle);
};
function createReloadButton(){
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

function action(hit,def,pl1,pl2){
if (pl1.hp === 100 && pl1.hp === 100){
    generateLogs('start', pl2, pl1);
}

    if(!def.defence[hit.hit]){
        pl1.changeHP(HIT[hit.hit]);
        pl1.elHP();
        pl1.renderHP();
        generateLogs('hit', pl1, pl2);
    }else if(def.defence[hit.hit]){
        generateLogs('def', pl2, pl1);
    }

    if(!hit.defence[def.hit]){
        pl2.changeHP(HIT[def.hit]);
        pl2.elHP();
        pl2.renderHP();
        generateLogs('hit', pl2, pl1);
    }else if(hit.defence[def.hit]){
        generateLogs('def', pl1, pl1);
    }

    if(pl1.hp === 0 || pl2.hp === 0 ){
        console.log('стоп игра');
        $form[6].disabled = true;
            if(pl1.hp === 0){
                playerWin(pl2.name);
            }else if(pl2.hp === 0){
                playerWin(pl1.name);
            }else{
                playerWin();
             
            }
            createReloadButton();
    }
}
$arenas.appendChild(createPlayer( pl1));
$arenas.appendChild(createPlayer( pl2));
function generateLogs (type, pl1, pl2){
    const time = new Date();
    const times = `${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}`;
    let text='' ;
    let index;
    switch (type) {
        case 'start':
             text = logs[type].replace('[player1]',pl1.name).replace('[player2]',pl2.name).replace('[time]',times);
            break;
            case 'hit':
                 index = Math.floor(Math.random() * (logs[type].length - 1 + 1)) + 1;
                 text = logs[type][index].replace('[playerKick]',pl1.name).replace('[playerDefence]',pl2.name);
            break;
            case 'defence':
                 index = Math.floor(Math.random() * (logs[type].length - 1 + 1)) + 1;
                text = logs[type][index].replace('[playerKick]',pl1.name).replace('[playerDefence]',pl2.name);
                break;
            case 'end':
                 index = Math.floor(Math.random() * (logs[type].length - 1 + 1)) + 1;
                text = logs[type][index].replace('[playerWins]',pl1.name).replace('[playerLose]',pl2.name);
                break;
            case 'draw':
                text = logs[type];
            break;
    }
 


const el = `<p>${text}</p>`;
$chat.insertAdjacentHTML("beforeend",el);
}
$form.addEventListener('submit', (e)=>{
e.preventDefault();

action(enemyAttack(), playerAtack(), pl1, pl2);
});


