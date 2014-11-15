"use strict";

(function () {
    var inputContext = null,
        keyboardElement;

    function init() {
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

        /* General Smiley Keys */
        var smileyKeys = keyboardElement.querySelectorAll("button.smiley");
        for (var i = 0; i < smileyKeys.length; i++) {

            smileyKeys[i].addEventListener('click', function (e) {
                var smiley = e.target.textContent;
                for (var j = 0; j < smiley.length; j++) {
                    sendKey(smiley.charCodeAt(j));
                }
            });
        }

        /* the 4 special keys of the keyboards*/
        document.getElementById('specKey_backspace')
                .addEventListener('click', function (e) {
                    sendKey(KeyEvent.DOM_VK_BACK_SPACE);
                });

        document.getElementById('specKey_enter')
                .addEventListener('click', function (e) {
                    sendKey(KeyEvent.DOM_VK_RETURN);
                });

        document.getElementById('specKey_space')
                .addEventListener('click', function (e) {
                    sendKey(KeyboardEvent.DOM_VK_SPACE);
                });

        var switchElement = document.getElementById('switchLayout');
        switchElement.addEventListener('click', function () {
            //switchHandler
            var mgmt = navigator.mozInputMethod.mgmt;
            mgmt.next();
        });

        // long press to trigger IME menu
        var menuTimeout = 0;
        switchElement.addEventListener('touchstart', function () {
            menuTimeout = window.setTimeout(function () {
                var mgmt = navigator.mozInputMethod.mgmt;
                mgmt.showAll();
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
                }
                break;

            default:
                if (inputContext) {
                    inputContext.sendKey(0, keyCode, 0);
                }
                break;
        }
    }

    window.addEventListener('load', init);
})();