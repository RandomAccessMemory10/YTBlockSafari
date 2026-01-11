// content.js

function nativeClick(element) {
    const events = ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'];
    events.forEach(etype => {
        const evt = new MouseEvent(etype, {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(evt);
    });
}

function skipAd() {
    const video = document.querySelector('video');
    const adShowing = document.querySelector('.ad-showing, .ad-interrupting');
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button, [id^="skip-button"]');

    // Time Warp
    if (adShowing && video) {
        if (!isNaN(video.duration) && video.currentTime < video.duration) {
            video.currentTime = video.duration;
        }
    }

    // Attempt to remove ad end screen
    if (skipButton) {
        nativeClick(skipButton);
    }
}

setInterval(skipAd, 100);