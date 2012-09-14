var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');

        
        var body = $(document.body);
        var bodySize = body.getSize();
        var viewSize = {};
        body.setStyle('width', bodySize.x);
        body.setStyle('height', bodySize.y);
        viewSize.x = bodySize.x;
        viewSize.y = bodySize.y;

        // log('viewSize.width', viewSize.x);
        // log('viewSize.height', viewSize.y);

        var viewController = new ViewController(viewSize);
        body.adopt(viewController.options.viewContainer);


        var heartSpeed = 1000;
        heartBeat();

        function heartBeat() {
            var media = new Media('sound/heartbeat.mp3', mediaSuccess, mediaError);
            media.play();
            heartSpeed -= heartSpeed >= 500 ? 25 : 0;
            setTimeout(heartBeat, heartSpeed);
            console.log('heartSpeed');
        }

        function mediaSuccess()
        {
            console.log('sucess');
        }

        function mediaError()
        {
            alert('mediaError');
        }
    }
};
