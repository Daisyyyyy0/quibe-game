const container = document.querySelector('.container');


let edge = 2;  //假設邊長為2個方形

function  createQubes(){
    let qubes = ''; 
    let answer = Math.floor( Math.random()*edge **2 )
    for(let i = 0; i < edge**2; i++){
        if( i == answer){
            qubes += '<div class="qube answer"></div>';
        }else{
            qubes += '<div class="qube"></div>';
        }
    }
    container.innerHTML = qubes;
}

function answerSetting(){
    const answerQube = document.querySelector('.qube.answer');
    answerQube.addEventListener('click', function(){
        resetContainer();
    })
}

function resetContainer(){
    createQubes();
    answerSetting();
}

resetContainer();
