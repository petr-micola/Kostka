const btn = document.getElementById('btn');
const score = document.getElementById('skore');

let cube;
let kolo = 0;
let timer;
let p1;
let p2;

function animation () {
    if (kolo % 2 == 0) {
        p1 = Math.ceil(Math.random() * 6);
        cube.src = `img/${p1}.svg`;
    } else {
        p2 = Math.ceil(Math.random() * 6);
        cube.src = `img/${p2}.svg`;
    }
}

function cancel () {
    clearInterval(timer);
    if (kolo % 2 == 0) score.innerHTML += `<p>${kolo+1}. Hráč 1 hodil ${p1}.</p>`;
    else score.innerHTML += `<p>${kolo+1}. Hráč 2 hodil ${p2}.</p>`;
    kolo++;
}

function game() {
    if (kolo % 2 == 0) cube = document.getElementById('cube1');
    else cube = document.getElementById('cube2');
    timer = setInterval(animation, 180);
    setTimeout(cancel, 1500);
}

btn.addEventListener('click', () => {
    if (kolo != 6) game();
});