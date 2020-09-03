const stylecss = `
.eye {
    position: fixed;
    left: 50%;
    right: 0;
    bottom: 9.3333rem;
    transform: translateX(-50%);
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    border: 0.0833rem solid black;

}

.in1 {
    position: relative;
    width: 25rem;
    height: 25rem;
    background-color: red;
    border-radius: 50%;
    box-shadow: inset 0 0 2.5rem black,
        inset 0 0 2.5rem black,
        inset 0 0 2.5rem black,
        inset 0 0 2.5rem black
}

.in2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14.1667rem;
    height: 14.1667rem;
    border-radius: 50%;
    box-shadow: 0 0 2.5rem black inset, 0 0 2.5rem black;
    
}

.in3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 4.1667rem;
    height: 4.1667rem;
    border-radius: 50%;
    background-color: black;
    box-shadow: 0px 0px 3.1667rem #000000;
}

.in2>span {
    position: absolute;
    display: inline-block;
    width: 4.1667rem;
    height: 4.1667rem;
    background-color: black;
    border-radius: 50%;
    
}

.in2 .s1 {
    left: 0;
    top: 0.5rem;
}

.in2 .s2 {
    right: -1rem;
    top: 1.8333rem;
}

.in2 .s3 {
    left: 3.75rem;
    bottom: -1.25rem;
}

.in2>span:after {
    content: "";
    border: 0 solid transparent;
    border-bottom: 1rem solid black;
    border-radius: 0 0 0 16.6667rem;
    width: 4.0833rem;
    height: 2.6667rem;
    position: absolute;
    top: 0;
}

.in2>span.s1:after {
    left: -1.4167rem;
    top: -1.4167rem;
    transform: rotateZ(56deg);
}

.in2>span.s2:after {
    top: -1.3333rem;
    right: -1.4167rem;
    transform: rotateZ(139deg);
}

.in2>span.s3:after {
    top: 2.3333rem;
    right: 0.4167rem;
    transform: rotateZ(285deg);
}
.in2{
    display:none;
}
.ot2{
    position: absolute;
    width: 22.6667rem;
    height: 22.6667rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.ot2 .ots{
    position: absolute;
    width: 0;
    height: 0;
    border-width: 0 3rem 9.8333rem;
    border-style: solid;
    border-color: transparent transparent black;
}
.ot2 .ots:after{
    content: "";
    border: 0 solid transparent;
    border-bottom: 4rem solid black;
    border-radius: 0 0 0 16.6667rem;
    width: 11.5833rem;
    height: 25.6667rem;
    position: absolute;
    left: -4.4rem;
    top: 1.1167rem;
    transform: rotateZ(196deg);
}
.ot2 .ot3{
    left: 5.03833rem;
    top: 1.1667rem;
    transform: rotate(-33deg);
}
.ot2 .ot4{
    right: 2.3833rem;
    top: 6.1rem;
    transform: rotate(87deg);
}
.ot2 .ot5{
    bottom: 1.1667rem;
    left: 5.6833rem;
    transform: rotate(-154deg);
}
.otin{
    position: absolute;
    width: 5.6667rem;
    height: 5.6667rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: black;
    border-radius: 50%;
}
.ot2 span{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4.1667rem;
    height: 4.1667rem;
    transform: translate(-50%,-50%);
    background-color: red;
    z-index: 3;
    border-radius: 50%;
    box-shadow: 0 0 2rem black inset, 0 0 3rem red;
}
.ot2{

    transform: translate(-50%,-50%) scale(0.15); 
}
.in2 {
    animation:suoxiao 4s ease-in infinite;
}
.ot2{
    animation: xuanzhuan2 4s ease-in-out infinite;
}

.in2{
    display:block;
}
`
let style = document.querySelector("#style")
let divtxt = document.querySelector("#text")


let n = 1
let time = 10
let t = run()

let player = {
    events:{
        '#pause':'pause',
        '#play':'play',
        '#slow':'slow',
        '#normal':'normal',
        '#fast':'fast',
    },
    init:()=>{
        player.bindEvents()
    },
    bindEvents:()=>{
        for(let key in player.events){
            console.log(player.events[key])
            document.querySelector(key).onclick = player[player.events[key]]
        }
    },
    resetRun:()=>{
        clearInterval(t)
        t = run()
    },
    pause: ()=>{
        clearInterval(t)
    },
    play:()=>{
        player.resetRun()
    },
    slow: ()=>{
        time = 200
        player.resetRun()
    },
    normal: ()=>{
        time = 10
        player.resetRun()
    },
    fast: ()=>{
        time = 1
        player.resetRun()
    }
} 

function run(){
    s = setInterval(()=>{
        if(n < stylecss.length){
            let txt = stylecss.substring(0,n)
            divtxt.innerText = txt
            style.innerHTML = txt
            
            n++
            divtxt.scrollTop = 99999
        }else{
            clearInterval(t)
        }
        
    },time)
    return s
}

player.init()


