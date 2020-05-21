import * as Common from "../lib/common.js"

document.addEventListener('DOMContentLoaded', function(event) {
    console.log("game start");

    function clear() {

    }

    function show() {
        for (var i = 0; i < 10; ++i)
            for (var j = 0; j < 10; ++j) {
                Common.cell[i][j] = Common.getRandomInt(2) === 0 ? 'X' : ' ';

                Common.mark(i, j, Common.cell[i][j] === 'X' ? 'alife' : 'dead');

            }
    }

    function itterrate() {
        for (var i = 0; i < 10; ++i)
            for (var j = 0; j < 10; ++j) {
                let x = i % 10;
                let y = j % 10;

                if (Common.cell[x][y] = 'X') {
                    Common.cell[x][y] = Common.neighbors(x, y) < 3 ? ' ' : 'X'
                    Common.cell[x][y] = Common.neighbors(x, y) > 3 ? ' ' : 'X'
                }
                if (cell[x][y] === 'd') {
                    cell[x][y] = neighbors(x, x) === 3 ? 'X' : ' ';
                }
            }
    }

    window.setInterval(() => {
        Common.clear();
        show();
        console.log("redraw")
        itterrate();
    }, 2000);

} /* DOMContentLoaded */ )