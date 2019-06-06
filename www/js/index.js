// index.js

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // Method below REQUIRES elements we removed from body in index.html
        // So we comment it out.
        // this.receivedEvent('deviceready');

        let options = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: CameraPreview.CAMERA_DIRECTION.FRONT,  // Front/back camera
            toBack: true,   // Set to true if you want your html in front of your preview
            tapPhoto: false,  // Tap to take photo
            tapFocus: true,   // Tap to focus
            previewDrag: false
        };

        var flash_mode = 'off';
        // Take a look at docs: https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview#methods
        CameraPreview.startCamera(options);

    }
};
