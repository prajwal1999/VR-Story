var Scene = "Scene1";
var AudioPlaying = false;

var Scene1Info = [];
var Scene2Info = [];
var Scene3Info = [];
var scene3_4 = false;
var scene3_5 = false;

var bg_audio_1 = document.querySelector("#audio1_bg");
var bg_audio_2 = document.querySelector("#audio2_bg");
var bg_audio_3 = document.querySelector("#audio3_bg");
var bg_audio_1_playing = false;
var bg_audio_2_playing = false;
var bg_audio_3_playing = false;

      function graphics() {
        var currPos=document.querySelector("#camera").getAttribute('rotation');
        var currX=currPos.x%360;
        var currY=currPos.y%360;
        if (currX < 0) {currX = currX+360}
        if (currY < 0) {currY = currY+360}
        var xLabel="X: "+ currX.toFixed(2);
        var yLabel="Y: "+ currY.toFixed(2);
        var skyElement = document.querySelector('#background');
        // console.log(xLabel, yLabel)
        if(Scene === "Scene1") {

          if( (currX > 346 || currX < 20) && (currY > 65 && currY < 100) && Scene === "Scene1" ) {
              skyElement.setAttribute('src', '#scene11')
              document.querySelector('#audio_image1_1').setAttribute('position', "-94 27 0")
          } 
          else if( (currX > 358 || currX < 10) && (currY > 160 && currY < 180) && Scene === "Scene1" ) {
              skyElement.setAttribute('src', '#scene14')
              document.querySelector('#audio_image1_4').setAttribute('position', "-20 15 91")
          }
          else if( (currX > 332 && currX < 348) && (currY > 317 && currY < 334) && Scene === "Scene1" ) {
              skyElement.setAttribute('src', '#scene13')
              document.querySelector('#audio_image1_3').setAttribute('position', "60 -22 -75")
          } else if ( (currX > 28 && currX < 44) && (currY > 74 && currY < 92) && Scene === "Scene1") {
              skyElement.setAttribute('src', '#scene12')
              document.querySelector('#audio_image1_2').setAttribute('position', "-65 60 -10")
          }
          else {
              skyElement.setAttribute('src', '#scene1BW')
              document.querySelector('#audio_image1_1').setAttribute('position', "-100 27 0")
              document.querySelector('#audio_image1_4').setAttribute('position', "-20 15 100")
              document.querySelector('#audio_image1_3').setAttribute('position', "52 -15 -100")
              document.querySelector('#audio_image1_2').setAttribute('position', "-100 60 -10")
              let randNum = Math.random()
              
              if ( (randNum > 0.99) && (Scene1Info.indexOf("audio1_2") === -1) &&  Scene === "Scene1") {
                  document.querySelector("#spacial_box1_2").click()
              } else if ( (randNum < 0.01) && (Scene1Info.indexOf("audio1_3") === -1) &&  Scene === "Scene1") {
                  document.querySelector("#spacial_box1_3").click()
              }
          }
        } else if(Scene === "Scene2") {
          if( (currX > 326 || currX < 28) && (currY > 213 && currY < 251) ) {
            skyElement.setAttribute('src', '#scene21')
            document.querySelector('#audio_image2_1').setAttribute('position', "53 20 75")
          } else if( (currX > 328 || currX < 22) && (currY > 330 && currY < 354) ) {
            skyElement.setAttribute('src', '#scene22')
            document.querySelector('#audio_image2_2').setAttribute('position', "47 11 -86")
          } else if( (currX > 319 && currX < 347) && (currY > 175 && currY < 188) ) {
            skyElement.setAttribute('src', '#scene23')
            document.querySelector('#audio_image2_3').setAttribute('position', "8 -24 92")
          } else if( (currX > 30 && currX < 43) && (currY > 120 && currY < 133) ) {
            skyElement.setAttribute('src', '#scene24')
            document.querySelector('#audio_image2_4').setAttribute('position', "-58 65 41")
          } else if( (currX > 354 || currX < 25) && (currY > 45 && currY < 70) ) {
            skyElement.setAttribute('src', '#scene25')
            document.querySelector('#audio_image2_5').setAttribute('position', "-80 43 -33")
          } else if( (currX > 22 && currX < 41) && (currY > 357 || currY < 10) ) {
            skyElement.setAttribute('src', '#scene26')
            document.querySelector('#audio_image2_6').setAttribute('position', "5 57 -77")
          }
          else {
            skyElement.setAttribute('src', '#scene2BW')
            document.querySelector('#audio_image2_4').setAttribute('position', "-100 65 41")
            document.querySelector('#audio_image2_5').setAttribute('position', "-100 43 -33")
            document.querySelector('#audio_image2_6').setAttribute('position', "5 57 -100")
            let randNum = Math.random()
              
            if ( (randNum > 0.20) && (randNum < 0.21) && (Scene2Info.indexOf("audio2_4") === -1) &&  Scene === "Scene2") { console.log(randNum)
              document.querySelector("#spacial_box2_4").click()
            } else if ( (randNum > 0.40) && (randNum < 0.41) && (Scene2Info.indexOf("audio2_6") === -1) &&  Scene === "Scene2") { console.log(randNum)
              document.querySelector("#spacial_box2_6").click()
            }
          }
        } else if(Scene === "Scene3") {
          if(scene3_4) {
            skyElement.setAttribute('src', '#scene34')
            document.querySelector('#audio_image3_3').setAttribute('position', "-81 30 42")
          } else if(scene3_5) {
            skyElement.setAttribute('src', '#scene35')
            document.querySelector('#audio_image3_3').setAttribute('position', "-88 19 55")
          }
          else if( (currX > 313 || currX < 20) && (currY > 229 && currY < 261) ) {
            skyElement.setAttribute('src', '#scene31')
          } else if( (currX > 318 || currX < 16) && (currY > 143 && currY < 173) ) {
            skyElement.setAttribute('src', '#scene32')
          } else if( (currX > 341 || currX < 18) && (currY > 76 && currY < 120) ) {
            if(scene3_4) {
              skyElement.setAttribute('src', '#scene34')
              document.querySelector('#audio_image3_3').setAttribute('position', "-81 30 42")
            } else if(scene3_5) {
              skyElement.setAttribute('src', '#scene35')
              document.querySelector('#audio_image3_3').setAttribute('position', "-88 19 55")
            } else {
              skyElement.setAttribute('src', '#scene33')
              document.querySelector('#audio_image3_3').setAttribute('position', "-85 15 22")
            }
          } 
          else {
              skyElement.setAttribute('src', '#scene3BW')
              document.querySelector('#audio_image3_3').setAttribute('position', "-100 15 22")
          }
        }

        if(Scene1Info.length === 0 && Scene === "Scene1" && !AudioPlaying) {
          document.querySelector('#arrow_image1_1_2').setAttribute('position', "-95 -6 0")
          document.querySelector('#arrow_image1_1_3').setAttribute('position', "-95 -6 -18")
        } else {
          document.querySelector('#arrow_image1_1_2').setAttribute('position', "-104 -6 0")
          document.querySelector('#arrow_image1_1_3').setAttribute('position', "-104 -6 -18")
        }

        if(Scene2Info.length === 6 && Scene === "Scene2" && !AudioPlaying) {
          document.querySelector('#arrow_image2_1').setAttribute('position', "47 22 80")
          document.querySelector('#arrow_image2_2').setAttribute('position', "55 25 -68")
        } else {
          document.querySelector('#arrow_image2_1').setAttribute('position', "47 50 80")
          document.querySelector('#arrow_image2_2').setAttribute('position', "55 25 -92")
        }

        if(Scene3Info.length === 3 && Scene === "Scene3" && !AudioPlaying) {
          document.querySelector('#arrow_image3_1').setAttribute('position', "84 3 40")
          document.querySelector('#arrow_image3_2').setAttribute('position', "-32 0 90")
        } else {
          document.querySelector('#arrow_image3_1').setAttribute('position', "100 3 40")
          document.querySelector('#arrow_image3_2').setAttribute('position', "-32 0 105")
        }



        // background sound for scenes 
        // if(Scene === "Scene1") {
          if(!bg_audio_1_playing) {
            bg_audio_1_playing = true
            bg_audio_1.play(); 
          }
          bg_audio_1.addEventListener('ended', ()=> {
            bg_audio_1_playing = false;
          })
        // } 
        // else if(Scene === "Scene2") {
        //   bg_audio_1 = false;
        //   bg_audio_3 = false;
        //   if(!bg_audio_2_playing) {
        //     bg_audio_2_playing = true
        //     bg_audio_2.play(); 
        //   }
        //   bg_audio_2.addEventListener('ended', ()=> {
        //     bg_audio_2_playing = false;
        //   })
        // }
    
        timerID = setTimeout(graphics,100);

        return true;
      }

      const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
      }