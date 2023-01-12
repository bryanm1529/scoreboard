let homeEl= document.getElementById('home-score');
let guestEl= document.getElementById("guest-score");

let homeScore= 0;
let guestScore= 0;



function addOneForGuest(){
    guestScore++;
    guestEl.innerHTML= guestScore;


}


function addOneForHome(){
    homeScore++;
    homeEl.innerHTML= homeScore;
}

function addTwoForGuest(){
    guestScore+=2;
    guestEl.innerHTML= guestScore;
}

function addTwoForHome(){
    homeScore+=2;
    homeEl.innerHTML= homeScore;
}

function addThreeForGuest(){
    guestScore+=3;
    guestEl.innerHTML= guestScore;
}

function addThreeForHome(){
    homeScore+=3;
    homeEl.innerHTML= homeScore;
}

function reset(){
    homeScore= 0;
    guestScore= 0;
    homeEl.innerHTML= homeScore;
    guestEl.innerHTML= guestScore;
}