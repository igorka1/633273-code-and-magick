//var canvas = document.getElementById('cloud');
//var ctx = canvas.getContext('2d');
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
    renderCloud = function(ctx, CLOUD_X + EDGE * 2, CLOUD_Y + EDGE * 2, 'rgba(0, 0, 0, 0.7)');
    renderCloud = function(ctx, CLOUD_X, CLOUD_Y, 'white');

    var maxTime = getMaxElement(times);

    // var playerIndex = 0;
    // var playerName = 'Вы';
    // var playerColor = 'rgba(255, 0, 0, 1)';

    // ctx.fillStyle = playerColor;
    // ctx.fillText(playerName, CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP + EDGE);
    // ctx.fillRect(CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP, BAR_WIDTH, BAR_HEIGHT);

    // var playerIndex = 1;
    // var playerName = 'Кекс';
    // var playerColor = 'blue';

    // var players = ['Вы', 'Кекс', 'Игорь', 'Катя'];

    // ctx.fillStyle = playerColor;
    // ctx.fillText(playerName, CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP + EDGE);
    // ctx.fillRect(CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP, BAR_WIDTH, BAR_HEIGHT);

    // var playerIndex = 2;
    // var playerName = 'Игорь';
    // var playerColor = 'grey';

    // ctx.fillStyle = 'grey';
    // ctx.fillText(playerName, CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP + EDGE);
    // ctx.fillRect(CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP, BAR_WIDTH, BAR_HEIGHT);

    // var playerIndex = 3;
    // var playerName = 'Катя';
    // var playerColor = 'grey';

    // ctx.fillStyle = 'grey';
    // ctx.fillText(playerName, CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP + EDGE);
    // ctx.fillRect(CLOUD_X + EDGE + (BAR_WIDTH + GAP) * playerIndex, CLOUD_HEIGHT - GAP, BAR_WIDTH, BAR_HEIGHT);

    for (var i = 0; i < players.length; i++) {
        //   MAX_BAR      BAR[I]
    // ----------- = --------
    //  BAR_HEIGHT       X
    
    //  X = (BAR_HEIGHT * BAR[I]) / MAX_BAR
    
        ctx.fillText(players[i], CLOUD_X + EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP + EDGE);
        ctx.fillRect(CLOUD_X + EDGE + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP, BAR_WIDTH, times[i]) / maxTime);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.font = '16px PT Mono';
        ctx.fillText('Ура вы победили!');
        ctx.fillText('nСписок результатов:');
    }
};