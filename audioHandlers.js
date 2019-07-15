AFRAME.registerComponent('audiohandler1_1', {
    init: function() {
    let playing = false;
    let audio = document.querySelector("#audio1_1");
    this.el.addEventListener('click', () => { console.log('clicked')
        audio.play()
    });
    }
})

AFRAME.registerComponent('audiohandler1_4', {
    init: function() {
    let playing = false;
    let audio = document.querySelector("#audio1_4");
    this.el.addEventListener('click', () => { console.log('clicked')
        audio.play()
    });
    }
})