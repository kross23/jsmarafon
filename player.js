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

export default Players;