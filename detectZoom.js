//javaSript 处理电脑和浏览器pc端缩放对页面的影响
//由于用户的个人习惯或其他原因，可能会调整到电脑上的缩放比例或者浏览器的缩放比例，该方法用于适配用户调整比例不影响界面效果
function detectZoom() {
  let ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  }
  else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  }
  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  if (ratio) {
    ratio = Math.round(ratio * 100);
  }
  return ratio;
};