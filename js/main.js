

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
   *
   * @param {*} max
   * This will return on each call a random number 0..max
   */
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function shipX( x0, y0, shipSize){
    const _root_ = document.getElementById('root');

    for(let ax=0; ax<shipSize; ++ax ) {
      if(x0 +ax < 10 && y0<10)
        mark( x0 + ax, y0, "yellow" )
    }
  }

  function shipY( x0, y0, shipSize ) {
    const _root_ = document.getElementById('root');

    for(var by=0; by<shipSize; ++by ) {
      if( x0 < 10 && (y0+by)<10)
        mark( x0, y0+by, "red" );
    }
  }
  /**
   * Setup the battle ground. For every cell i will decide to place
   * a battle ship of a given size
   */
  function setupBG () {
    setBG("blue");
    const _root_ = document.getElementById('root');

    for(var iy=0; iy<10; ++iy) {
      for(var ix=0; ix<10; ++ix ) {
        const shipSize = getRandomInt(8);
        const dir = getRandomInt(3);

        console.log( "shipSize:" + shipSize + ", dir:"+ dir)
        switch(dir) {
          case 1: /* running along the x axis*/
              shipX(ix,iy, shipSize);
            break;

          case 2: /* running along the y axis */
              shipY(ix, iy, shipSize);
            break;
        }
      }
    }
  }

  /***
   * convert game coordinates to board coordinates
   *
   */
  function XtoPx(x) {return x*50+"px";}

  function YToPx(y) { return y*50 + "px";}

  const fire = function (event) {
    console.log(event.clientX + ", " +  event.clientY );
  }


  /**
   * place a marker at x,y
   * @param {x,y, color )
   */
  function mark ( x, y, color ) {
    const _root_ = document.getElementById('root');
    const name = "" + x + "," + y;

    _root_.innerHTML +=`<div id="${name}" class="cell"></div>`;
    _root_.onclick = fire;

    const elem = document.getElementById(name);
    elem.style.setProperty("transform", 'translate('+ XtoPx(x) + ", " + YToPx(y) + ")" );
    elem.style.setProperty("background-color",  color );
    }

  /**
   *
   * @param {change bg color of the battel ground to color }
   */
  function setBG(color) {
    console.log("changing bg color to " + color );
    const BG = document.getElementById("root");
    BG.style.setProperty("background-color", color);
  }

  function main(event) {
    console.log(event)
    //setupBG();
    setBG("blue");

    setupBG();
  }

  main(event)
} /* DOMContentLoaded */
)