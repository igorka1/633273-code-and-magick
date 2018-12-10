var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var EDGE = 5;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

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

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + EDGE * 2, CLOUD_Y + EDGE * 2, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length - 1; i++) {
    
        ctx.fillText(players[i], CLOUD_X + EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP + EDGE);
        ctx.fillRect(CLOUD_X + EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP, BAR_WIDTH, times[i]) / maxTime);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.font = '16px PT Mono';
        ctx.fillText('Ура вы победили!');
        ctx.fillText('nСписок результатов:');
    }
};