let cube = document.getElementById('cube');
const result = document.getElementById('result');
const play = document.getElementById('play');

let kolo = 0;
let hod;
let hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    cube.src = `img/${hod}.svg`;
}

function kostkaStop() {
    clearInterval(timer);
    timer = false;
    hody.push(hod);
    result.innerHTML = statistika();
    if (kolo % 2 == 0) {
        cube = document.getElementById('cube2');
    }
    kolo++;
}

play.addEventListener('click', () => {
    timer = setInterval(animace, 180);
    setTimeout(kostkaStop, 1500);
});

function suma() {
    let soucet = 0;
    hody.forEach(function (value) {
        soucet += value;
    });
    return soucet;
}

function max() {
    let maximum = 1;
    hody.forEach(function (value) {
        if (value > maximum) maximum = value;
    });
    return maximum;
}

function min() {
    let minimum = 6;
    hody.forEach(function (value) {
        if (value < minimum) minimum = value;
    });
    return minimum;
}

function statistika() {
    let vysledek = `<h3>Aktuální hod: ${hody[hody.length - 1]}</h3>`;
    vysledek += `<p>Počet hodů: ${hody.length}</p>`;
    vysledek += `<p>Součet hodů: ${suma()}</p>`;
    vysledek += `<p>Průměr hodů: ${(suma()/hody.length).toFixed(2)}</p>`;
    vysledek += `<p>Maximum z hodů: ${max()}</p>`;
    vysledek += `<p>Minumum z hodů: ${min()}</p>`;
    return vysledek;
}