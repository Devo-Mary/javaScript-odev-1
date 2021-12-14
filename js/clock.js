let userName = prompt("Kullanici adinizi giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    if(h==0){
        h = 24;
    }

    if(h>24){
        h=h-24;
    }
    h = (h<10)? "0" + h : h;
    m = (m<10)? "0" + m : m;
    s = (s<10)? "0" + s : s;
     
    var time = `${h} : ${m} : ${s} , ${days[date.getDay()]}`
    document.querySelector("#myClock").innerText = time;
    document.querySelector("#myClock").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();