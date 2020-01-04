
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function shipX( x0, y0, shipSize){
    const _root_ = document.getElementById('root');

    for(let ax=0; ax<shipSize; ++ax ) {
      mark( x0 + ax, y0 )
    }
  }

  function shipY( x0, y0, shipSize ) {
    const _root_ = document.getElementById('root');

    for(var by=0; by<shipSize; ++by ) {
      mark( x0, y0+by );
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

  function XtoPx(x) {return x*50+"px";}

  function YToPx(y) { return y*50 + "px";}


  /**
   * place a marker at x,y
   * @param {*} name
   */
  function mark ( x, y, color ) {
    const _root_ = document.getElementById('root');
    _root_.innerHTML +=`<div id="${x}_${y}" class="cell"></div>`;
    const name = "" + x + "_" + y;

    const elem = document.getElementById(name);
    elem.style.setProperty("transform-origin"," 0px 0px");
    elem.style.setProperty("transform", 'translate('+ XtoPx(x) + ", " + YToPx(y) + ")" );
    elem.style.setProperty("background-color",  color ); ;
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
    //setupBG();
    setBG("blue")

    mark( 3,3);
    mark( 3,4);
    mark( 3,5);
    mark( 3,6);
    
    mark( 3,3, "red");
    mark( 4,3, "red");
    mark( 5,3, "red");
    mark( 6,3, "red");
  }

  main(event)
} /* DOMContentLoaded */
)