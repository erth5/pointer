"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animejs_1 = require("animejs");
//Button control
var button = document.querySelector('.button');
//downloaded
var EMOJI = document.getElementById('emoji');
var EMOJIEYELEFT = document.getElementById('eye-left');
var EMOJIEYERIGHT = document.getElementById('eye-right');
var DOMEMOJI = EMOJI.getBoundingClientRect();
var BOX = 200;
var EMOJIPOS = {
    bottom: DOMEMOJI.bottom + BOX,
    left: DOMEMOJI.left - BOX,
    right: DOMEMOJI.right + BOX,
    top: DOMEMOJI.top - BOX
};
document.addEventListener('mousemove', function (event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    if (mouseX >= EMOJIPOS.left &&
        mouseX <= EMOJIPOS.right &&
        mouseY >= EMOJIPOS.top &&
        mouseY <= EMOJIPOS.bottom) {
        setTransform(EMOJIEYERIGHT, maxMovement(5, EMOJIEYERIGHT.getBoundingClientRect().left - mouseX), maxMovement(5, EMOJIEYERIGHT.getBoundingClientRect().top - mouseY));
        setTransform(EMOJIEYELEFT, maxMovement(5, EMOJIEYELEFT.getBoundingClientRect().left - mouseX), maxMovement(5, EMOJIEYELEFT.getBoundingClientRect().top - mouseY));
        setTransform(EMOJI, maxMovement(80, EMOJI.getBoundingClientRect().left - mouseX), maxMovement(80, EMOJI.getBoundingClientRect().top - mouseY));
        animejs_1.default({
            targets: '.drop',
            translateY: '0px',
            opacity: '1',
            duration: '300ms'
        });
        animejs_1.default({
            targets: '.eye-background',
            opacity: '1',
            duration: '300ms'
        });
        animejs_1.default({
            targets: '.mouth-sad',
            opacity: 0,
            duration: '300ms'
        });
        animejs_1.default({
            targets: '.mouth-happy',
            opacity: 1,
            duration: '300ms'
        });
    }
    else {
        animejs_1.default({
            targets: '.drop',
            translateY: '0px',
            opacity: '0',
            duration: '300ms'
        });
        animejs_1.default({
            targets: '.eye-background',
            opacity: '0',
            duration: '300ms'
        });
        animejs_1.default({
            targets: '.mouth-sad',
            opacity: 1,
            duration: '300ms'
        });
        animejs_1.default({
            targets: '.mouth-happy',
            opacity: 0,
            duration: '300ms'
        });
        setTransform(EMOJI, 0, 0);
        setTransform(EMOJIEYELEFT, 0, 5);
        setTransform(EMOJIEYERIGHT, 0, 5);
    }
});
var setTransform = function (obj, x, y) {
    obj.style.transform = "translate(" + x + "px, " + y + "px)";
};
var maxMovement = function (max, movement) {
    if ((movement / 6) > max) {
        return -max;
    }
    if ((movement / 6) < -max) {
        return max;
    }
    if ((movement / 6) > -max || (movement / 6) < max) {
        return -(movement / 6);
    }
};
