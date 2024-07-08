'use strict'
alert("Qaysi oyda qancha kundan iborat ekanligini bilmoqchimisiz? Unda bu narsa yordam beradi☺")
let month=prompt("Oyning nomini kiriting!(hammasi kichik harflarda):")
function find(){
    for (let i=1;i<32;i++){
        alert(i)
    }
}
function findSecond(){
    for (let i=1;i<31;i++){
        alert(i)
    }
}
function findThird(){
    alert("kabisa yilida 29 kun bo'ladi!")
    for (let i=1;i<29;i++){
        alert(i)
    }
}
if (month==="yanvar"||month==="mart"||month==="may"||month==="iyul"||month==="avgust"||month==="oktyabr"||month==="dekabr"){
    find();
}
else if(month==="aprel"||month==="iyun"||month==="sentyabr"||month==="noyabr"){
    findSecond();
}
else if(month==="fevral"){
    findThird();
}
else{
    alert("Xato kiritgansiz qayta yangilab urinib ko'ring!!!")
}