var speed = 50;
var speed2 = 100;
var msg = document.getElementById('msg');
var i = 0;
var isRemoving = false;

var messages = [
    "Plant the Future of Cybersecurity",
    "Cultivate a Community of Ethical Malware Developers",
    "Grow Your Own Understanding of Malware",
    "Harvest the Malware of Minds Around the World",
]

function wait(callback, duration) {
    setTimeout(callback, duration);
}

function action() {
    if (isRemoving) {
        if (msg.innerText.length > 0) {
            msg.innerText = msg.innerText.substr(0, msg.innerHTML.length - 1);
            setTimeout(action, speed2);
            return;
        }

        isRemoving = false;
        i++;
        if (i >= messages.length) {
            i = 0;
        }

        setTimeout(action, speed);
        return;
    }

    var message = messages[i];
    msg.innerText = message.substr(0, msg.innerHTML.length + 1);
    if (msg.innerText.length === message.length) {
        wait(function() {
            isRemoving = true;
            setTimeout(action, speed2);
        }, 2000);
        return;
    }
    setTimeout(action, speed);
}

action();

