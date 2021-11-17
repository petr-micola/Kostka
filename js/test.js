const btn = document.getElementById('play');
const stats = document.getElementById('result');

let kostka = document.getElementById('cube');
let hrac1;
let soucetHrac1 = 0;
let hrac2;
let soucetHrac2 = 0;
let timer;
let kolo = 0;

function vypis() {
    result.innerHTML += `<p>Hráč 1 celkem: ${soucetHrac1} Hráč 2 celkem: ${soucetHrac2}</p>`;
    result.innerHTML += `<p>Konec hry.</p>`;
    if (soucetHrac1 > soucetHrac2) {
        result.innerHTML += `<p>Hráč 1 vyhrál.</p>`;
    } else if (soucetHrac1 < soucetHrac2) {
        result.innerHTML += `<p>Hřáč 2 vyhrál.</p>`;
    } else {
        result.innerHTML += `<p>Remíza.</p>`;
    }
}

function animace() {
    if (kolo % 2 == 0) {
        hrac1 = Math.ceil(Math.random() * 6);
        kostka.src = `img/${hrac1}.svg`;
    } else {
        hrac2 = Math.ceil(Math.random() * 6);
        kostka.src = `img/${hrac2}.svg`;
    }
}

function kostkaStop() {
    clearInterval(timer);
    if (kolo % 2 == 0) {
        soucetHrac1 += hrac1;
        result.innerHTML += `<p>Hráč 1 hod: ${hrac1} celkem: ${soucetHrac1}</p>`;
    } else {
        soucetHrac2 += hrac2;
        result.innerHTML += `<p>Hráč 2 hod: ${hrac2} celkem: ${soucetHrac2}</p>`;
    }
    kolo++;
    if (kolo == 6) {
        vypis();
    }
}

function hra() {
    if (kolo % 2 == 0) {
        kostka = document.getElementById('cube');
        timer = setInterval(animace, 180);
        setTimeout(kostkaStop, 1500);
    } else {
        kostka = document.getElementById('cube2');
        timer = setInterval(animace, 180);
        setTimeout(kostkaStop, 1500);
    }
}

btn.addEventListener('click', () => {
    if (kolo != 6) hra();
});