export var cell = [
    /* 0 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 1 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 2 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 3 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 4 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 5 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 6 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 7 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 8 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 9 */
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
/***
 * convert game coordinates to board coordinates
 *
 */
export function XtoPx(x) { return x * 50 + "px"; }

export function YToPx(y) { return y * 50 + "px"; }

export function mark(x, y, cls) {
    const _root_ = document.getElementById('root');
    const name = "" + x + "," + y;
    _root_.innerHTML += `<div id="${name}" class="${cls}"></div>`;

    const elem = document.getElementById(name);
    elem.style.setProperty("transform", 'translate(' + XtoPx(x) + ", " + YToPx(y) + ")");
}



function p(x, y, dx, dy) {
    return { x: (x + dx) % 100, y: (y + dy) % 100 }
}

/**
 * 
 * @param {x} x 
 * @param {y} y 
 * returns the number of direct nighbors
 */
export function neighbors(x, y) {
    let result = 0;

    result += (cell[p(x, y, 1, 1).x][p(x, y, 1, 1).y] !== ' ' ? 1 : 0);
    result += (cell[p(x, y, 1, 1).x][p(x, y, 1, 0).y] !== ' ' ? 1 : 0);
    result += (cell[p(x, y, 1, -1).x][p(x, y, 1, -1).y] !== ' ' ? 1 : 0);
    result += (cell[p(x, y, -1, 0).x][p(x, y, -1, 0).y] === ' ' ? 1 : 0);
    result += (cell[p(x, y, -1, -1).x][p(x, y, -1, -1).y] === ' ' ? 1 : 0);
    result += (cell[p(x, y, -1, 1).x][p(x, y, -1, 1).y] === ' ' ? 1 : 0);

    return result;
}

export function clear() {
    const root = document.getElementById('root')

    root.innerHTML = "";
}