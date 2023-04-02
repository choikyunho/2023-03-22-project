const time = document.querySelector(".time"); 

function getTime(){
    const newDate = new Date();
    const hours = String(newDate.getHours()).padStart(2,0);
    const minutes = String(newDate.getMinutes()).padStart(2,0);
    const seconds = String(newDate.getSeconds()).padStart(2,0);

    //time.innerText =hours + ":" + minutes + ":" + seconds;
    time.innerText = `${hours}:${minutes}:${seconds}`;
    // innerText : text를 변경하는 함수
}

getTime();
setInterval(getTime,1000);
