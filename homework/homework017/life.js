window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  canvas.width = 600;
  canvas.height = 600;
  /* canvas 内的元素根据 canvas.width/height 定位，不加此项会有变形 */

  drawLines(canvas, context);
  // giveLife();
}

/* 初始网格 */
function drawLines(canvas, context) {
  var positionX = [];
    for(var i=0; i<30; i++) {
      positionX[i] = i*20;
    }
  var positionY = [];
    for(var j=0; j<30; j++) {
      positionY[j] = j*20;
    }

  for(var k=0; k<30; k++) {
    for(var l=0; l<30; l++) {
      context.fillRect(positionX[k],positionY[l],20,20);
      context.clearRect(positionX[k]+1,positionY[l]+1,18,18);
    }
  }
}

/* 初始生命赋值 */
function giveLife() {
  var life = new Array();
    for(var i=0; i<30; i++) {
      life[i] = new Array();
        for(var j=0; j<30; j++) {
          life[i][j] = Math.round(Math.random());
          // console.log(life[i][j]);
        }
    }
  console.log(life[1]);
  newLife(life);
}

/* 初始生命显示 */
function newLife(life) {
  //console.log(life[1]); //传递效果
  displayLife(life);
  //lifeEvolution(life);

  // setInterval(lifeEvolution(life),300);
}

/* 演绎后代 */
function displayNextGeneration() {
    lifeEvolution(giveLife());
}

/* 生命演绎函数，数组赋值 */
function lifeEvolution(life) {
  var nextGeneration = new Array();
    for(var i=1; i<29; i++) {
        nextGeneration[i] = new Array();
        for(var j=1; j<29; j++) {
        var count = life[i-1][j-1] + life[i][j-1] + life[i+1][j-1] + life[i-1][j] + life[i+1][j] + life[i-1][j+1] + life[i][j+1] + life[i+1][j+1];
        // console.log(count);
            if ( life[i][j] == 0 && count == 3 ) {
            nextGeneration[i][j] = 1;
            } else if ( life[i][j] == 1 && ( count != 2 && count != 3 )) {
            nextGeneration[i][j] = 0;
            } else {
            nextGeneration[i][j] = life[i][j];
            }
            // console.log(nextGeneration[i][j]);
        }
    }
  // console.log(nextGeneration[1]); // 测试赋值结果
  displayLife(nextGeneration);
}

// setInterval(displayLife(),200)

/* 按数组填充 */
function displayLife(life) {
  for(var i=1; i<29; i++) {
    for(var j=1; j<29; j++) {
      if (life[i][j] == 1) {
        console.log(life[i][j]);
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle="#FF0000";
        context.fillRect(i*20+1,j*20+1,18,18);
      }
    }
  }
}

/*


function update_canvas() {
  console.log("update once!");
}
*/
