console.log('assets/js/app.js');
function throwNewError () {
    console.log("MSG: Test error gor executed..");
    throw new Error("Test error gor executed..");
}

document.querySelector("#testErr")?.addEventListener('click', throwNewError);

function toggleMenu () {
    if (document.querySelector('.top-header.fixed').classList.contains('show') 
    && document.querySelector('.top-header.fixed').classList.contains('show-nav')) {
        document.querySelector('.top-header.fixed').classList.remove('show', 'show-nav');
    } else {
        document.querySelector('.top-header.fixed').classList.add('show', 'show-nav');
    }
}

function doPushState() {
    const historyPushElement = document.getElementById('historyPush');
    historyPushElement && historyPushElement.addEventListener('click', function() {
        console.log('doPushState()');
        let location = window.location.href;
        console.log('location', location);
        if (!location) {
            console.log('window', window);
        }
        if (!location.includes('#')) {
            if (location.at(-1) != '/') location += '/#/';
            else location += '#/';
        } else {
            location = location.substring(0, location.indexOf('#')) + '#/';
        }
        console.log('location', location);
        window.top.history.pushState(null, 'test', location + (Math.random() * 1000));
    });
}
// doPushState(); // Don't keep it enabled, causing performance issue

function startVwoCookieDebug() {
    var cookieSet = document.__lookupSetter__('cookie');
    var cookieGet = document.__lookupGetter__('cookie');
    Object.defineProperty(document, 'cookie', {
        set: function (h) {
            console.log('Setting cookies',arguments[0]);
            cookieSet.apply(document, arguments);
        },
        get: function (h) {
            return cookieGet.apply(document, arguments);
        }
    });
}
// startVwoCookieDebug(); // Don't keep it enabled, causing performance issue

function startVwoDebugState() {
    window.VWO = window.VWO || [];
    // window.VWO.push(['onVariationApplied',
    //     console.log
    // ]);
    VWO.push(['onEventReceive', 'vS', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        var experimentId = data[1];
        var variationId = data[2];
        // Do something
        console.log({e: ['onEventReceive:VARIATION_SHOWN',eventName].toString(), variationId, experimentId});
    }]);
    VWO.push(['onEventReceive', 'tNR', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        // var experimentId = data[1];
        // Do something
        console.log({e: ['onEventReceive:TEST_NOT_RUNNING', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'tSC', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:TRACK_SESSION_CREATED', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'tSE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:TRACK_SESSION_EXPIRED', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'tIB', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:TOP_INITIALIZE_BEGIN', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'tIE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:TOP_INITIALIZE_ERROR', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'tIEn', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:TOP_INITIALIZE_END', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'qEE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:QUEUE_EXECUTE_ERROR', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'cAVGFE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'cVGFE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:CONVERT_VISIT_GOAL_FOR_EXPERIMENT', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'cGFAE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:CONVERT_GOAL_FOR_ALL_EXPERIMENTS', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'cARGFAE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:CONVERT_ALL_REVENUE_GOALS_FOR_ALL_EXPERIMENTS', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'cRGFE', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:CONVERT_REVENUE_GOALS_FOR_EXPERIMENT', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'bRTR', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:BEFORE_REDIRECT_TO_URL', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'hCl', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:HEATMAP_CLICK', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'vA', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:VARIATION_APPLIED', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'nS', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:NEW_SESSION', eventName].toString(), data});
    }]);
    VWO.push(['onEventReceive', 'nSF', function (data) {
        var eventName = data[0]; // data[0] will always contain the event Name
        // Other data parameter changes according to the event
        console.log({e: ['onEventReceive:NEW_SURVEY_FOUND', eventName].toString(), data});
    }]);
}