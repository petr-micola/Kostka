const btn = document.getElementById('btn');
const result = document.getElementById('vysledek');

let p1a = [];
let p2a = [];
let stats;
let score;
let cube;
let kolo = 0;
let timer;
let p1;
let p2;

function animation() {
    if (kolo % 2 == 0) {
        p1 = Math.ceil(Math.random() * 6);
        cube.src = `img/${p1}.svg`;
    } else {
        p2 = Math.ceil(Math.random() * 6);
        cube.src = `img/${p2}.svg`;
    }
}

function sum() {
    let total = 0;
    if (kolo % 2 == 0) {
        p1a.forEach(function (value) {
            total += value;
        });
    } else {
        p2a.forEach(function (value) {
            total += value;
        });
    }
    return total;
}

function max() {
    let maximum = 1;
    if (kolo % 2 == 0) {
        p1a.forEach(function (value) {
            if (value > maximum) maximum = value;
        });
    } else {
        p2a.forEach(function (value) {
            if (value > maximum) maximum = value;
        });
    }
    return maximum;
}

function min() {
    let minimum = 6;
    if (kolo % 2 == 0) {
        p1a.forEach(function (value) {
            if (value < minimum) minimum = value;
        });
    } else {
        p2a.forEach(function (value) {
            if (value < minimum) minimum = value;
        });
    }
    return minimum
}

function cancel() {
    clearInterval(timer);
    if (kolo % 2 == 0) {
        p1a.push(p1);
        score.innerHTML += `<p>${p1}</p>`;
        stats.innerHTML = `<p>${p1a.length}</p>`;
        stats.innerHTML += `<p>${sum()}</p>`;
        stats.innerHTML += `<p>${(sum()/p1a.length).toFixed(2)}</p>`;
        stats.innerHTML += `<p>${max()}</p>`;
        stats.innerHTML += `<p>${min()}</p>`;
    } else {
        p2a.push(p2);
        score.innerHTML += `<p>${p2}</p>`;
        stats.innerHTML = `<p>${p2a.length}</p>`;
        stats.innerHTML += `<p>${sum()}</p>`;
        stats.innerHTML += `<p>${(sum()/p2a.length).toFixed(2)}</p>`;
        stats.innerHTML += `<p>${max()}</p>`;
        stats.innerHTML += `<p>${min()}</p>`;
    }
    kolo++;
    if (kolo == 2) end();
}

function game() {
    if (kolo % 2 == 0) {
        cube = document.getElementById('cube1');
        score = document.getElementById('skore1');
        stats = document.getElementById('statistika1');
    } else {
        cube = document.getElementById('cube2');
        score = document.getElementById('skore2');
        stats = document.getElementById('statistika2');
    }
    timer = setInterval(animation, 180);
    setTimeout(cancel, 1500);
}

function end() {
    result.innerHTML = `<p>Hráč 1 celkem: ${p1a}.</p>`
    result.innerHTML = `<p>Hráč 2 celkem: ${p2a}.</p>`
    if (p1a > p2a) result.innerHTML = `<p>Blahopřejeme, hráč 1 vyhrál!</p>`
    else if (p1a < p2a) result.innerHTML = `<p>Blahopřejeme, hráč 2 vyhrál!</p>`
    else result.innerHTML = `<p>Remíza!</p>`
}

btn.addEventListener('click', () => {
    if (kolo != 2) game();
});