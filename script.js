let timer = null;
let countDownNumber = 10
const changeState = function(state){
    const main = document.querySelector('main');
    main.className = 'main-state' + state;
    clearInterval(timer);
    countDownNumber = 10
    document.getElementById('countdown').innerHTML = countDownNumber

    if(state == 2){
        timer = setInterval(function(){
            countDownNumber--
            document.getElementById('countdown').innerHTML = countDownNumber;
         if(countDownNumber <= 0){
            changeState(3)
         }   
        }, 1000)
    }
    else if(state == 3){
       const success = setTimeout(function(){
        let randomNumber = Math.floor(Math.random()*10);
        if(randomNumber > 5){
            changeState(4);
        }
        else{
            changeState(5);
        }
       }, 2000) 
    }

}