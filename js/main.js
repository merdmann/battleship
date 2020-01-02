'use strict'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log("***** html loaded");

  var cell = [
    /* 0 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 1 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 2 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 3 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 4 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 5 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 6 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 7 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 8 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    /* 9 */ [' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ];

  /**
   * Setup the battle ground
   */
  function setupBG () {
    setBG("blue");
    const _root_ = document.getElementById('root');

    for(var iy=0; iy<10; ++iy) {
      for(var ix=0; ix<10; ++ix ) {
        const id = "" + ix + "_" + iy;

        const cell=`<div id="${id}" class="cell"></div>`;
        _root_.innerHTML += cell;

        translate( id, ix*5, iy*50);
        console.log(cell)
      }
    }
  }

  /**
   * move to x,y
   * @param {*} name
   */
  function translate ( name, x, y ) {
    const elem = document.getElementById(name);

    elem.style.setProperty("transform", 'translate('+x+"px, " + y + 'px)' );
  }


  /**
   *
   * @param {change bg color od the battelgroundc} to color
   */
  function setBG(color) {
    console.log("changing bg color to " + color );
    const BG = document.getElementById("root");
    BG.style.setProperty("background-color", color);
  }

  function main(event) {
    console.log(event)
    setupBG();
  }

  main(event)
} /* DOMContentLoaded */
)