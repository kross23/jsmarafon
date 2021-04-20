const $form = document.querySelector('.control');
export const playerAtack = () => {
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