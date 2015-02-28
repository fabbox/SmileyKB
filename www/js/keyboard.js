
//window.addEventListener('DOMContentLoaded', function () {
//console.log('dom content loaded');
(function () {
  "use strict";
  var inputContext = null,
      keyboardElement ;

  function init() {
    //console.log('init');

    keyboardElement = document.getElementById('keyboard');

    window.navigator.mozInputMethod.oninputcontextchange = function () {
      inputContext = navigator.mozInputMethod.inputcontext;
      resizeWindow();
    };
    
    window.addEventListener('resize', resizeWindow);

    keyboardElement.addEventListener('mousedown', function (evt) {
      //onMouseDown
      // Prevent loosing focus to the currently focused app
      // Otherwise, right after mousedown event, the app will receive a focus event.
      evt.preventDefault();
    });

    /*  */
    function addKeyEvents(smileyKeys) {
      for (var i = smileyKeys.length - 1; i >= 0; i--) {
        smileyKeys[i].addEventListener('click', function (e) {
          var smiley = e.target.textContent;
          for (var j = 0; j < smiley.length; j++) {
            sendKey(smiley.charCodeAt(j));
          }
        });
      }
    }

    /* Smiley Keys */
    addKeyEvents(keyboardElement.querySelectorAll("button.smiley"));

    /* Emoji Keys */
    addKeyEvents(keyboardElement.querySelectorAll("button.emoji"));

    /* Special keys of the keyboards*/

    var backKeys = keyboardElement.querySelectorAll("button.specKey_backspace");
    for (var i = backKeys.length - 1; i >= 0; i--) {
      backKeys[i].addEventListener('click', function () {
        sendKey(KeyEvent.DOM_VK_BACK_SPACE);
      });
    }

    document.getElementById('specKey_enter')
            .addEventListener('click', function () {
              sendKey(KeyEvent.DOM_VK_RETURN);
            });

    document.getElementById('specKey_space')
            .addEventListener('click', function () {
              sendKey(KeyboardEvent.DOM_VK_SPACE);
            });

    document.getElementById('switchSmiley')
            .addEventListener('click', function () {
              if (document.getElementById('ascii').className.indexOf('hidden') >= 0) {
                document.getElementById('emoji').classList.add('hidden');
                document.getElementById('ascii').classList.remove('hidden');
                document.getElementById('switchEmoji').classList.remove('active');
                document.getElementById('switchSmiley').classList.add('active');
              }
            });

    document.getElementById('switchEmoji')
            .addEventListener('click', function () {
              if (document.getElementById('emoji').className.indexOf('hidden') >= 0) {
                document.getElementById('ascii').classList.add('hidden');
                document.getElementById('emoji').classList.remove('hidden');
                document.getElementById('switchEmoji').classList.add('active');
                document.getElementById('switchSmiley').classList.remove('active');
              }
            });

    var switchElement = document.getElementById('switchLayout');
    switchElement.addEventListener('click', function () {
      //switchHandler
      navigator.mozInputMethod.mgmt.next();
    });

    // long press to trigger IME menu
    var menuTimeout = 0;
    switchElement.addEventListener('touchstart', function () {
      menuTimeout = window.setTimeout(function () {
        navigator.mozInputMethod.mgmt.showAll();
      }, 700);
    });

    switchElement.addEventListener('touchend', function () {
      clearTimeout(menuTimeout);
    });
  }

  function resizeWindow() {
    window.resizeTo(window.innerWidth, keyboardElement.clientHeight);
  }

  function sendKey(keyCode) {
    switch (keyCode) {
      case KeyEvent.DOM_VK_BACK_SPACE:
      case KeyEvent.DOM_VK_RETURN:
        //console.log("special key!");
        if (inputContext) {
          inputContext.sendKey(keyCode, 0, 0);
        } else {
          console.log("no inputContext");
        }
        break;

      default:
        if (inputContext) {
          inputContext.sendKey(0, keyCode, 0);
        } else {
          console.log("no inputContext");
        }
        break;
    }
  }


  window.addEventListener('load', init);
})();
//});