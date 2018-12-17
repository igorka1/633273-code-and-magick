var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var EDGE = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 145;
var LINE_HEIGHT = 16 * 1.3;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + EDGE,
    CLOUD_Y + EDGE,
    "rgba(0, 0, 0, 0.7)"
  );
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "white");
  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_X + EDGE * 2, CLOUD_Y + EDGE + LINE_HEIGHT);
  ctx.fillText("\nСписок результатов:", CLOUD_X + EDGE, CLOUD_Y + EDGE + LINE_HEIGHT * 2);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + 4 * EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP + 4 * EDGE);
    ctx.fillText(Math.round(times[i]), CLOUD_X + 4 * EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP + EDGE - (BAR_HEIGHT * Math.round(times[i])) / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle ='hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%';
    }
    ctx.fillRect(CLOUD_X + 4 * EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP + 2 * EDGE, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};