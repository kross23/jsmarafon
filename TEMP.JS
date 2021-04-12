
        const player = getRandomPlayer(); 
        const curent= players[`${player}`];
        const $playerLive = document.querySelector(`.player${curent.player} .life`);
        const n = getRandomIntInclusive();
        curent.hp -= n;
        $playerLive.style.width =`${curent.hp}%`;
            if(curent.hp <= 0){
                curent.hp = 0;
                $playerLive.style.width =`${0}%`;
              
            //     $arenas.appendChild(playerLose(curent.name));
            //     
            //    
             }