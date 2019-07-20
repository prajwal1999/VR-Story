AFRAME.registerComponent('audiohandler1_1', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#audio1_1");
      this.el.addEventListener('click', async() => { //console.log('clicked')
          let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          audio.play()
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_1") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          Scene1Info.push("audio1_1") 
        }
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_4', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#audio1_4");
      this.el.addEventListener('click', async() => { //console.log('clicked')
          let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          audio.play()
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_4") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          Scene1Info.push("audio1_4")
        }
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_3', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#audio1_3");
      this.el.addEventListener('click', async() => { //console.log('clicked')
      let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          audio.play()
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_3") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          Scene1Info.push("audio1_3")
        }
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_2', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#audio1_2");
      this.el.addEventListener('click', async() => { //console.log('clicked')
      let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          audio.play()
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_2") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
              // console.log(document.querySelector('#camera').getAttribute("zoom"))
            })
          }
          Scene1Info.push("audio1_2")
        }
        console.log(Scene1Info)
      })
    }
  })
  
  AFRAME.registerComponent('spacial_audiohandler1_2', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#spacial_audio1_2");
      this.el.addEventListener('click', () => {
        if(Scene1Info.indexOf("audio1_2") === -1) {
          audio.play()
        }  
      });
      audio.addEventListener('ended', () => {
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('spacial_audiohandler1_3', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#spacial_audio1_3");
      this.el.addEventListener('click', () => {
        if(Scene1Info.indexOf("audio1_3") === -1) {
          audio.play()
        }  
      });
      audio.addEventListener('ended', () => {
        console.log(Scene1Info)
      })
    }
  })
 