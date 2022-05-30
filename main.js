const container = document.querySelector('.container');

let edge = 2;  //假設邊長為2個方形
let times = [1,1,1,1,1,2,3,4,5,6]   //每一關(難度)玩幾次，索引直0,1隨意填  
let count = 1  // 計算一關玩幾次(當前難度遊玩次數)

function createQubes(){
    let qubes = ''; 
    let answer = Math.floor( Math.random()*edge **2 ) //0~(總數-1)的隨機數
    // console.log('answer',answer);
    let r = Math.floor(Math.random() * 256 )  //產生RGB的三色數值
    let g = Math.floor(Math.random() * 256 )
    let b = Math.floor(Math.random() * 256 )

    for(let i = 0; i < edge**2; i++){
        if( i == answer){
            qubes += `<div class="qube qube${-edge} answer"></div>`;
        }else{
            qubes += `<div class="qube qube${-edge}"></div>`;
        }
    }
    container.innerHTML = qubes;
}

function answerSetting(){
    const answerQube = document.querySelector('.qube.answer');
    answerQube.addEventListener('click', function(){
        
        // if(count == times[edge]){
        //     count = 1
        //     edge += 1
        // }else{
        //     count += 1
        // }
        // resetContainer();
        if(edge < 9){
            edge++;
            resetContainer();
        }else if(edge===9){
            resetContainer();
        }
    })
}

function resetContainer(){
    createQubes();
    answerSetting();
    console.log('edge',edge)
}

resetContainer();

// 1.變換顏色
// 2.變換數量
// 3.難度(透明度)
// 4.計分
// 5.計時
// 6.暫停

