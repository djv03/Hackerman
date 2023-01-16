
//random messages to display hacking
let messages=[
    "intializing attack...",
    "getting attack from port 128:23:33:00:7/23...",
    "try to acess servers...",
    "brute force atttack in action...",
    "tried 183292 configuration...",
    "tried 467849 configuration...",
    "target details found...",
    "task complted sucessfully...",
    "intializing attack2...",
    "getting attack from port 104:23:13:00:8/43...",
    "try to acess servers...",
    "brute force atttack in action...",
    "tried 148454 configuration...",
    "tried 554804 configuration...",
    "target details found...",
    "task complted sucessfully...",
];

//promises of hacking() function will reolve here 
let sleep=async (seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds*200);
    })
}

//defining hacking function
let hacking= async(message)=>{
   await sleep(2);
    document.querySelector('.center').innerHTML=document.querySelector('.center').innerHTML+message+"<br> <br>";
}


// call hacking function
(async()=>{
    for (let index = 0; index < messages.length; index++) {
        await hacking(messages[index]);
    }
})()

//JS of changing result dynamically

let loadip=()=>{
    setTimeout(() => {
        document.getElementById('result').innerHTML=`<div id="result" style="background-color: black; color: rgb(0, 207, 0);"> acessed  i/p: 101:32:43:00/44</div>`;
    
    }, 6000);
}

loadip();

//JS of binary bits flowing illusion on each side of main container
setInterval(()=>{
    let time= new Date();
    // console.log(time.getSeconds());
    if (time.getSeconds()%2==0) {
        
        document.querySelector('.left').innerHTML="0100010111010010 0101100101000101 1011010111001101";
        document.querySelector('.right').innerHTML="1000111100101001 1011010111001101 0101100101000101";
        
        
    } else {
        document.querySelector('.left').innerHTML="1000101100101001 01101011100110101 01101011100110101";
        document.querySelector('.right').innerHTML="0100010111010010 00101100101001010 1000101100101001";
        
    }
},1000);



