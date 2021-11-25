const btn = document.getElementById('btn');

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
    p1a.forEach(function (value) {
        if (value > maximum) maximum = value;
    });
    return maximum;
}

function min() {
    let minimum = 6;
    p1a.forEach(function (value) {
        if (value < minimum) minimum = value;
    });
    return minimum
}

function cancel() {
    clearInterval(timer);
    if (kolo % 2 == 0) {
        p1a.push(p1);
        score.innerHTML += `<p>${p1}</p>`;
        stats.innerHTML = `<p>${p1a.length}</p>`;
    } else {
        p2a.push(p2);
        score.innerHTML += `<p>${p2}</p>`;
        stats.innerHTML = `<p>${p2a.length}</p>`;
    }
    kolo++;
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

btn.addEventListener('click', () => {
    if (kolo != 6) game();
});