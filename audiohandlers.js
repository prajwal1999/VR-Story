// Scene 1
AFRAME.registerComponent('audiohandler1_1', {
    init: function() {
      let audio = document.querySelector("#audio1_1");
      this.el.addEventListener('click', async() => { 
        if(!AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_1") === -1) {
          Scene1Info.push("audio1_1") 
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_4', {
    init: function() {
      let audio = document.querySelector("#audio1_4");
      this.el.addEventListener('click', async() => {
        if(!AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_4") === -1) {
          Scene1Info.push("audio1_4")
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_3', {
    init: function() {
      let audio = document.querySelector("#audio1_3");
      this.el.addEventListener('click', async() => {
        if(!AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_3") === -1) {
          Scene1Info.push("audio1_3")
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_2', {
    init: function() {
      let audio = document.querySelector("#audio1_2");
      this.el.addEventListener('click', async() => {
        if(!AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_2") === -1) {
          Scene1Info.push("audio1_2")
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })
  
  AFRAME.registerComponent('spacial_audiohandler1_2', {
    init: function() {
      let audio = document.querySelector("#spacial_audio1_2");
      this.el.addEventListener('click', () => {
        if(Scene1Info.indexOf("audio1_2") === -1 && !AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }  
      });
      audio.addEventListener('ended', () => {
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('spacial_audiohandler1_3', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#spacial_audio1_3");
      this.el.addEventListener('click', () => {
        if(Scene1Info.indexOf("audio1_3") === -1 && !AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }  
      });
      audio.addEventListener('ended', () => {
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })
 

// Scene 2
AFRAME.registerComponent('audiohandler2_4', {
  init: function() {
    let audio = document.querySelector("#audio2_4");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_4") === -1) {
        Scene2Info.push("audio2_4") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_5', {
  init: function() {
    let audio = document.querySelector("#audio2_5");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_5") === -1) {
        Scene2Info.push("audio2_5") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_6', {
  init: function() {
    let audio = document.querySelector("#audio2_6");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_6") === -1) {
        Scene2Info.push("audio2_6") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})



AFRAME.registerComponent('spacial_audiohandler2_4', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_4");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_4") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})



AFRAME.registerComponent('spacial_audiohandler2_6', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_6");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_6") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})




AFRAME.registerComponent('audiohandler3_3', {
  init: function() {
    let audio = document.querySelector("#audio3_3");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene3Info.indexOf("audio3_3") === -1) {
        Scene3Info.push("audio3_3")
      }
      AudioPlaying = false;
      scene3_4 = true;
      scene3_5 = false;
      setTimeout(()=>{
        document.querySelector("#audio_image3_4").click()
      }, 500)
      console.log(Scene3Info)
    })
  }
})


AFRAME.registerComponent('audiohandler3_4', {
  init: function() {
    let audio = document.querySelector("#audio3_4");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene3Info.indexOf("audio3_4") === -1) {
        Scene3Info.push("audio3_4")
      }
      AudioPlaying = false;
      scene3_4 = false;
      scene3_5 = true;
      setTimeout(()=>{
        document.querySelector("#audio_image3_5").click()
      }, 500)
      console.log(Scene3Info)
    })
  }
})


AFRAME.registerComponent('audiohandler3_5', {
  init: function() {
    let audio = document.querySelector("#audio3_5");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene3Info.indexOf("audio3_5") === -1) {
        Scene3Info.push("audio3_5")
      }
      AudioPlaying = false;
      scene3_4 = false;
      scene3_5 = false;
      console.log(Scene3Info)
    })
  }
})
