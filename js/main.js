const btn = document.getElementById('btn');
const result = document.getElementById('vysledek');

let tables = document.querySelectorAll('section')

let p1a = [];
let p2a = [];
let stats;
let score;
let cube;
let kolo = 0;
let timer;
let p1;
let p2;

for (let i = 0; i < tables.length; i++) {
    tables[i].classList.add('p1');
}
cube = document.getElementById('cube1');
cube.classList.add('p1');

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

        cube.classList.add('default');
        for (let i = 0; i < tables.length; i++) {
            tables[i].classList.remove('p1');
        }
        for (let i = 0; i < tables.length; i++) {
            tables[i].classList.add('p2');
        }
        cube = document.getElementById('cube2');
        score = document.getElementById('skore2');
        stats = document.getElementById('statistika2');
        cube.classList.remove('default');
        cube.classList.add('p2');
    } else {
        p2a.push(p2);
        score.innerHTML += `<p>${p2}</p>`;
        stats.innerHTML = `<p>${p2a.length}</p>`;
        stats.innerHTML += `<p>${sum()}</p>`;
        stats.innerHTML += `<p>${(sum()/p2a.length).toFixed(2)}</p>`;
        stats.innerHTML += `<p>${max()}</p>`;
        stats.innerHTML += `<p>${min()}</p>`;

        cube.classList.add('default');
        for (let i = 0; i < tables.length; i++) {
            tables[i].classList.remove('p2');
        }
        for (let i = 0; i < tables.length; i++) {
            tables[i].classList.add('p1');
        }
        cube = document.getElementById('cube1');
        score = document.getElementById('skore1');
        stats = document.getElementById('statistika1');
        cube.classList.remove('default');
        cube.classList.add('p1');
    }
    kolo++;
    if (kolo == 12) end();
    btn.addEventListener('click', start);
}

function game() {
    btn.removeEventListener('click', start);
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
    for (let i = 0; i < tables.length; i++) {
        tables[i].classList.add('default');
    }
    cube.classList.add('default');
    let p1total = sum();
    kolo++;
    let p2total = sum();
    if (p1total > p2total) result.innerHTML += `<h4>Hráč 1 vyhrál!</h4>`;
    else if (p1total < p2total) result.innerHTML += `<h4>Hráč 2 vyhrál!</h4>`;
    else result.innerHTML += `<h4>Remíza!</h4>`;
    btn.innerHTML = 'Restart?';
}

function start() {
    if (kolo < 12) game();
}

btn.addEventListener('click', start);