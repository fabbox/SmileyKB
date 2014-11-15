(function () {

    var btBack = document.getElementById('back'),
            btClose = document.getElementById('close');

    function back() {
        console.log("click back");
        btBack.removeEventListener('click', back);
        btClose.removeEventListener('click', close);

        document.addEventListener('visibilitychange', function () {
            window.close();
        });

        var activity = new MozActivity({
            name: 'moz_configure_window', // new name for device configuration panel
            //name: 'configure', // old name for device configuration panel
            data: {
                target: 'device'
            }
        });
    }

    function close() {
        console.log("click close");
        btBack.removeEventListener('click', back);
        btClose.removeEventListener('click', close);
        window.close();
    }

    btBack.addEventListener('click', back);
    btClose.addEventListener('click', close);
})();