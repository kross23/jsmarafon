import {logs} from './logs.js';


const $chat = document.querySelector('.chat');
export const generateLogs = (type='draw', pl1, pl2) => {

    const time = new Date();
    const times = `${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}`;
    let text='' ;
    let index;
    switch (type) {
        case 'start':
             text = logs[type].replace('[player1]',pl1.name).replace('[player2]',pl2.name).replace('[time]',times);
            break;
            case 'hit':
                 index = Math.floor(Math.random() * ((logs['hit'].length-1) - 1 + 1)) + 1;
                 text = logs[type][index].replace('[playerKick]',pl1.name).replace('[playerDefence]',pl2.name);
            break;
            case 'defence':
                 index = Math.floor(Math.random() * ((logs['defence'].length -1)- 1 + 1)) + 1;
                text = logs[type][index].replace('[playerKick]',pl1.name).replace('[playerDefence]',pl2.name);
                break;
            case 'end':
                 index = Math.floor(Math.random() * ((logs[type].length -1) - 1 + 1)) + 1;
                text = logs[type][index].replace('[playerWins]',pl1.name).replace('[playerLose]',pl2.name);
                break;
            case 'draw':
                text = logs[type];
            break;
    }
 


const el = `<p>${text}</p>`;
$chat.insertAdjacentHTML("beforeend",el);
}