let blahajdisplay = document.getElementById("blahajcount");
let blahajimg = document.getElementById("blahajimg");
let blahaj = 0;
let saved = JSON.parse(localStorage.answer);
blahaj = saved;
localStorage.answer = JSON.stringify(blahaj);
let powerlvl = 0;
let powerequirement = 0;
let powerz = 100;
let hyper = false;
let mainui = document.getElementById("main");
let idk = false;
let shop = document.getElementById('upgrade');
shop.style.display = 'none';

power.innerHTML = "Your power level: " + powerlvl;



if (blahaj <= 1) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
}

else if (blahaj >= 2) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
}


function clicked() {

    if (hyper == true) {
        powerequirement += 2;
        blahaj += 2;
        blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
    }

    else {
        powerequirement++;
        blahaj++;
        if (blahaj == 1) {
            blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
        }

        else if (blahaj >= 2) {
            blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
        }
        blahajimg.height = 130;
        setTimeout(() => {
            setTimeout(() => blahajimg.height = 150, 0);
        }, 100);
    }
    document.getElementById('clicksound').play();
    localStorage.answer = JSON.stringify(blahaj);
    updatesmol();
    checks();
}

function updatesmol() {
    const smol = document.getElementById("smol-blahajs");
    if (blahaj >= 1)
        smol.innerHTML = "<img src=\"file (4).png\" alt=\"smol blahaj\" height=\"75\" width=\"75\">".repeat(blahaj - 1);
    else
        smol.innerHTML = "";
}

function gambling() {
    let inputElement = document.getElementById("gamble");
    let rawInput = inputElement.value;
    let test2 = Number(rawInput);
    let gamblerng = Math.floor(Math.random() * 2)

    if (blahaj < rawInput) {
        yes.innerHTML = "You can't gamble more blahajs than you have!";
    }

    else {
        if (gamblerng == 1) {
            blahaj += test2;
            yes.innerHTML = "You won " + test2 + " blahajs! You now have " + blahaj + " blahajs!";
            blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
            localStorage.answer = JSON.stringify(blahaj);
        }

        else {
            blahaj -= test2;
            yes.innerHTML = "You lost " + test2 + " blahajs. You now have " + blahaj + " blahajs.";
            blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
            localStorage.answer = JSON.stringify(blahaj);
        }
        updatesmol();
    }
}

function test() {
    blahaj = saved;
}


function checks() {
    if (powerequirement == powerz) {
        powerz *= 2;
        powerlvl++;
        power.innerHTML = "Your power level: " + powerlvl;
    }
}

function buyhyper() {
    if (hyper) {
        hyperbought.innerHTML = "Already bought!";
    }

    else {

        if (blahaj < 100) {
            hyperbought.innerHTML = "Not enough blahajs!";
        }

        if (blahaj >= 100) {
            hyper = true;
            blahaj -= 100;
            hyperbought.innerHTML = "Successfully bought!";
            blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
        }
    }
}


function showupgrade() {
    if (idk == true) {
        mainui.style.display = 'block';
    }

    if (idk == false) {
        mainui.style.display = 'none';
        idk = true;
        shop.style.display = 'block';
    }
    upg.innerHTML = 'Go back to the main menu';
}

function erase() {
    localStorage.clear();
}


test();
updatesmol();
