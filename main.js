const container = document.querySelector('.container');

const scoreElememt = document.querySelector('.score')
const timerElement = document.querySelector('.timer')
const pauseBtn = document.querySelector('.pause')

let edge = 2;  //假設邊長為2個方形
let times = [1,1,2,3,4,4,5,5,5,5]   //每一關(難度)玩幾次，索引直0,1隨意填  
let count = 1  // 計算一關玩幾次(當前難度遊玩次數)
let score = 0
let time = 60

function createQubes(){
    let qubes = ''; 
    let answer = Math.floor( Math.random()*edge **2 ) //0~(總數-1)的隨機數
    // console.log('answer',answer);
    let qubeSize = 100 / edge
    let r = 10 + Math.floor(Math.random() * 200 )  //產生RGB的三色數值
    let g = 10 + Math.floor(Math.random() * 200 )
    let b = 10 + Math.floor(Math.random() * 200 )
    let style = `style="width:${qubeSize}%; 
                        height:${qubeSize}%; 
                        background-color:rgb(${r}, ${g}, ${b});
                        " `
    let answerStyle = `style="width:${qubeSize}%; 
                        height:${qubeSize}%; 
                        background-color:rgb(${r}, ${g}, ${b});
                        opacity: calc(0.75 + ${edge/90});
                        " `
    for(let i = 0; i < edge**2; i++){
        if( i == answer){
            qubes += `<div class="qube answer" ${answerStyle}></div>`;
        }else{
            qubes += `<div class="qube" ${style}></div>`;
        }
    }
    container.innerHTML = qubes;
}

function answerSetting(){
    const answerQube = document.querySelector('.qube.answer');
    answerQube.addEventListener('click', function(){
        //當按鈕被點擊的時候，分數就會增加一分
        score += 1
        scoreElememt.innerHTML = `分數: ${score}分`

        if(count == times[edge]){
            count = 1
            edge += 1
        }else{
            count += 1
        }
        resetContainer();
        // if(edge < 9){
        //     edge++;
        //     resetContainer();
        // }else if(edge===9){
        //     resetContainer();
        // }
    })
}

function resetContainer(){
    createQubes();
    answerSetting();
    console.log('edge',edge)
}

function stopResetContainer(){
    return

}


resetContainer();
console.log('time', time);




let countdown = setInterval(function timeIsRunning() {
    time -=  0.01
    time = time.toFixed(2)
    timerElement.innerHTML = `剩餘: ${time}秒`

    //扣完時間後，確認是否時間到了
    if(time <= 0){
        clearInterval(countdown)
        stopResetContainer()
    }
}, 10)

let pauseOrNot = true
pauseBtn.addEventListener('click', function(){
    if(pauseOrNot){
        clearInterval(countdown)
        pauseBtn.innerHTML = `繼續撥放`
        pauseOrNot = false
    }else {
        pauseBtn.innerHTML = `暫停`
        countdown = setInterval(function timeIsRunning() {
            time -=  0.01
            time = time.toFixed(2)
            timerElement.innerHTML = `剩餘: ${time}秒`
            //扣完時間後，確認是否時間到了
            if(time <= 0){
                clearInterval(countdown)
            }
            pauseOrNot = true
        }, 10)
        stopResetContainer()

    }
})

// function timeIsRunning() {
//     time -=  0.01
//     time = time.toFixed(2)
//     timerElement.innerHTML = `剩餘: ${time}秒`

//     //扣完時間後，確認是否時間到了
//     if(time <= 0){
//         clearInterval(countdown)
//     }
// }



// 1.變換顏色
// 2.變換數量
// 3.難度(透明度)
// 4.計分
// 5.計時
// 6.暫停


//遇到一個聞題:
// ln75 & ln 95不能將timeIsRunning直接寫在外面獨立一個function timeIsRunning()，不知道為什麼
//時間暫停之後，不知道如何讓遊戲不能繼續進行
