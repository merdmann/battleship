var cell = [
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


var hitscore = 0
var shipId = 0
    /**
     *
     * @param {*} max
     * This will return on each call a random number 0..max
     */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function is_set(x, y) {
    return cell[y][x] !== " ";
}

function vessel(ship) {
    return 'BB' + ship;
}

function shipX(x0, y0, shipSize) {
    console.log('new X vessel : ' + vessel(shipId))

    // layout the ship
    for (let ax = 0; ax < shipSize; ++ax) {
        if (x0 + ax < 10 && y0 < 10) {
            mark(x0 + ax, y0, "yellow", "cell")
            cell[y0][x0 + ax] = vessel(shipId)
        }
    }
    return ++shipId;
}

function shipY(x0, y0, shipSize) {
    console.log('new vessel :' + vessel(shipId))

    //layout the the new vessel
    for (var by = 0; by < shipSize; ++by) {
        if (x0 < 10 && (y0 + by) < 10 && !is_set(x0, y0 + by)) {
            mark(x0, y0 + by, "red", "cell");

            cell[x0][y0 + by] = vessel(++shipId)
        }
    }

    //allocate a new vessel id 
    return ++shipId;
}
/**
 * Setup the battle ground. For every cell i will decide to place
 * a battle ship of a given size
 */
function setupBG() {
    setBG("blue");
    shipId = 0;
    const _root_ = document.getElementById('root');

    for (var iy = 0; iy < 10; ++iy) {
        for (var ix = 0; ix < 10; ++ix) {
            const shipSize = getRandomInt(8);
            const dir = getRandomInt(3);

            console.log('shipSize: ' + shipSize + ', dir:' + dir + ', shipId:' + shipId)
            switch (dir) {
                case 1:
                    /* running along the x axis*/
                    shipId = shipX(ix, iy, shipSize)
                    cell[ix][iy] = vessel(shipId)
                    break;

                case 2:
                    /* running along the y axis */
                    shipId = shipY(ix, iy, shipSize)
                    cell[ix][iy] = vessel(shipId)
                    break;
            }
        }
    }
}

/**
 * 
 * @param {check whether the last hist has sunk the ship } name 
 */
function is_sunk(name) {
    let result = false;

    for (let y = 0; y < 10; ++y)
        result = result | cell[y].includes(name);

    return result;
}

/***
 * convert game coordinates to board coordinates
 *
 */
function XtoPx(x) { return x * 50 + "px"; }

function YToPx(y) { return y * 50 + "px"; }

const fire = function(event) {
    const x = Math.floor(event.clientX / 50)
    const y = Math.floor(event.clientY / 50)

    if (cell[x][y] !== " ") {
        const shipName = cell[y][x]
        console.log("**HIT** x:" + x + ", y:" + y + ', vessel: ' + shipName)
        mark(x, y, "gray", "hit")
            /* display the hit score */
        const _hitscore_ = document.getElementById('hitscore')
        if (is_sunk(cell[y])) {
            console.log("Ship sunk" + cell[y][0])
            hitscore += 10;
        } else {
            hitscore += 100
        }
        _hitscore_.innerHTML = hitscore
        _hitscore_.innerHTMl
    }
}

/**
 * place a marker at x,y
 * @param {x,y, color )
 */
function mark(x, y, color, cls) {
    const _root_ = document.getElementById('root');
    const name = "" + x + "," + y;
    if (color === "gray")
        _root_.innerHTML += `<div id="${name}" class="${cls}"></div>`;
    else
        _root_.innerHTML += `<div id="${name}" class="${cls}">${cell[y][x]}</div>`;

    _root_.onclick = fire;

    const elem = document.getElementById(name);
    elem.style.setProperty("transform", 'translate(' + XtoPx(x) + ", " + YToPx(y) + ")");
    elem.style.setProperty("background-color", color);
}

/**
 *
 * @param {change bg color of the battle ground to color }
 */
function setBG(color) {
    console.log("changing bg color to " + color);
    const BG = document.getElementById("root");
    BG.style.setProperty("background-color", color);
}

function main(event) {
    console.log(event)
    setBG("blue");

    setupBG();
}


document.addEventListener('DOMContentLoaded', function(event) {
    console.log("***** html loaded");
    main(event)

} /* DOMContentLoaded */ )