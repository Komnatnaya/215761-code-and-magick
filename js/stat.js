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
