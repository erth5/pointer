import anime from "animejs";

//Button control
const button = document.querySelector('.button');

//downloaded

const EMOJI = document.getElementById('emoji');
const EMOJIEYELEFT = document.getElementById('eye-left');
const EMOJIEYERIGHT = document.getElementById('eye-right');
const DOMEMOJI = EMOJI.getBoundingClientRect();
const BOX = 200;
const EMOJIPOS = {
    bottom: DOMEMOJI.bottom + BOX,
    left: DOMEMOJI.left - BOX,
    right: DOMEMOJI.right + BOX,
    top: DOMEMOJI.top - BOX
};

document.addEventListener('mousemove', function(event) {

    const mouseX = event.pageX;
    const mouseY = event.pageY;

    if (
        mouseX >= EMOJIPOS.left &&
        mouseX <= EMOJIPOS.right &&
        mouseY >= EMOJIPOS.top &&
        mouseY <= EMOJIPOS.bottom
    ) {

        setTransform(
            EMOJIEYERIGHT,
            maxMovement(5, EMOJIEYERIGHT.getBoundingClientRect().left - mouseX),
            maxMovement(5, EMOJIEYERIGHT.getBoundingClientRect().top - mouseY)
        );

        setTransform(
            EMOJIEYELEFT,
            maxMovement(5, EMOJIEYELEFT.getBoundingClientRect().left - mouseX),
            maxMovement(5, EMOJIEYELEFT.getBoundingClientRect().top - mouseY)
        );

        setTransform(
            EMOJI,
            maxMovement(80, EMOJI.getBoundingClientRect().left -mouseX),
            maxMovement(80, EMOJI.getBoundingClientRect().top - mouseY)
        );

        anime({
            targets: '.drop',
            translateY: '0px',
            opacity: '1',
            duration: '300ms'
        });
        anime({
            targets: '.eye-background',
            opacity: '1',
            duration: '300ms'
        });
        anime({
            targets: '.mouth-sad',
            opacity: 0,
            duration: '300ms'
        });
        anime({
            targets: '.mouth-happy',
            opacity: 1,
            duration: '300ms'
        });
    } else {
        anime({
            targets: '.drop',
            translateY: '0px',
            opacity: '0',
            duration: '300ms'
        });
        anime({
            targets: '.eye-background',
            opacity: '0',
            duration: '300ms'
        });
        anime({
            targets: '.mouth-sad',
            opacity: 1,
            duration: '300ms'
        });
        anime({
            targets: '.mouth-happy',
            opacity: 0,
            duration: '300ms'
        });

        setTransform( EMOJI, 0, 0 );
        setTransform(EMOJIEYELEFT, 0, 5);
        setTransform(EMOJIEYERIGHT, 0, 5);

    }

});

const setTransform = (obj, x, y) => {
    obj.style.transform = `translate(${x}px, ${y}px)`;
};

const maxMovement = (max, movement) => {
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
