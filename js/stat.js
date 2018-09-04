var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(100, 10, 420, 270);


  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', 140, 40);
  ctx.strokeText('Список результатов:', 140, 60);

  ctx.strokeText(names[0], 140, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(140, 100, 40, times[0] / 40);

  ctx.strokeText(names[1], 200, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(200, 100, 40, times[1] / 40);

  ctx.strokeText(names[2], 260, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(260, 100, 40, times[2] / 40);

  ctx.strokeText(names[3], 320, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(320, 100, 40, times[3] / 40);
};  // <- тест логики работы


// работа на странице сайта ->>

//
//
// var CLOUD_WIDTH = 500;
// var CLOUD_HEIGHT = 200;
// var CLOUD_X = 100;
// var CLOUD_Y = 50;
// var GAP = 10;
// var FONT_GAP = 15;
// var TEXT_WIDTH = 50;
// var BAR_HEIGHT = 20;
// var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
//
// var renderCloud = function(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };
//
// var getMaxElement = function(arr) {
//   var maxElement = arr[0];
//
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }
//
//   return maxElement;
// };
//
// window.renderStatistics = function(ctx, players, times) {
//   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
//   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
//
// function getRandomArbitary(min, max)
// {
//   return Math.random() * (max - min) + min;
// };
//
//
//
//
//  var getRandomColor = function ()
// {
//   return 'rgba(0, 0, 255, ' + getRandomArbitary(0.1, 1) + ')';
// };
//
//
//   var maxTime = getMaxElement(times);
//
//   for (var i = 0; i < players.length; i++) {
//    ctx.fillStyle = 'black';
//     ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
//     if (players[i]=='Вы') {ctx.fillStyle = 'red';} else {ctx.fillStyle = getRandomColor();}
//
//     ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
//   }
// };
//
