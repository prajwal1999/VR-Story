var Scene = "Scene2";
      var Scene1Info = [];
      function graphics() {
        var currPos=document.querySelector("#camera").getAttribute('rotation');
        var currX=currPos.x%360;
        var currY=currPos.y%360;
        if (currX < 0) {currX = currX+360}
        if (currY < 0) {currY = currY+360}
        var xLabel="X: "+ currX.toFixed(2);
        var yLabel="Y: "+ currY.toFixed(2);
        var skyElement = document.querySelector('#background');
        console.log(xLabel, yLabel)
        if(Scene === "Scene1") {

          if( (currX > 346 || currX < 11) && (currY > 65 && currY < 100) && Scene === "Scene1" ) {
              skyElement.setAttribute('src', '#scene11')
              document.querySelector('#audio_image1_1').setAttribute('position', "-88 27 -25")
          } 
          else if( (currX > 358 || currX < 9) && (currY > 160 && currY < 180) && Scene === "Scene1" ) {
              skyElement.setAttribute('src', '#scene14')
              document.querySelector('#audio_image1_4').setAttribute('position', "-31 18 91")
          }
          else if( (currX > 332 && currX < 348) && (currY > 317 && currY < 334) && Scene === "Scene1" ) {
              skyElement.setAttribute('src', '#scene13')
              document.querySelector('#audio_image1_3').setAttribute('position', "51 -15 -83")
          } else if ( (currX > 28 && currX < 44) && (currY > 74 && currY < 92) && Scene === "Scene1") {
              skyElement.setAttribute('src', '#scene12')
              document.querySelector('#audio_image1_2').setAttribute('position', "-65 68 0")
          }
          else {
              skyElement.setAttribute('src', '#scene1BW')
              document.querySelector('#audio_image1_1').setAttribute('position', "-96 27 -25")
              document.querySelector('#audio_image1_4').setAttribute('position', "-29 20 98")
              document.querySelector('#audio_image1_3').setAttribute('position', "52 -15 -86")
              document.querySelector('#audio_image1_2').setAttribute('position', "-75 71 1")
              let randNum = Math.random()
              
              if ( (randNum > 0.99) && (Scene1Info.indexOf("audio1_2") === -1) &&  Scene === "Scene1") { console.log(randNum)
                  document.querySelector("#spacial_box1_2").click()
              } else if ( (randNum < 0.01) && (Scene1Info.indexOf("audio1_3") === -1) &&  Scene === "Scene1") { console.log(randNum)
                  document.querySelector("#spacial_box1_3").click()
              }
          }
        } else if(Scene === "Scene2") {
          if( (currX > 326 || currX < 28) && (currY > 215 && currY < 248) ) {
            skyElement.setAttribute('src', '#scene21')
            document.querySelector('#audio_image2_1').setAttribute('position', "47 28 80")
          } else if( (currX > 328 || currX < 22) && (currY > 330 && currY < 354) ) {
            skyElement.setAttribute('src', '#scene22')
            document.querySelector('#audio_image2_2').setAttribute('position', "55 25 -75")
          } else if( (currX > 319 && currX < 347) && (currY > 175 && currY < 188) ) {
            skyElement.setAttribute('src', '#scene23')
            document.querySelector('#audio_image2_3').setAttribute('position', "4 -20 92")
          }  else if( (currX > 30 && currX < 40) && (currY > 127 && currY < 133) ) {
            skyElement.setAttribute('src', '#scene24')
            document.querySelector('#audio_image2_4').setAttribute('position', "-63 64 39")
          }  else if( (currX > 354 || currX < 25) && (currY > 45 && currY < 70) ) {
            skyElement.setAttribute('src', '#scene25')
            document.querySelector('#audio_image2_5').setAttribute('position', "-92 27 -20")
          } else if( (currX > 22 && currX < 41) && (currY > 357 || currY < 10) ) {
            skyElement.setAttribute('src', '#scene26')
            document.querySelector('#audio_image2_6').setAttribute('position', "8 60 -76")
          }
          else {
            skyElement.setAttribute('src', '#scene2BW')
            document.querySelector('#audio_image2_1').setAttribute('position', "47 50 80")
            document.querySelector('#audio_image2_2').setAttribute('position', "55 25 -92")
            document.querySelector('#audio_image2_3').setAttribute('position', "4 -20 100")
            document.querySelector('#audio_image2_4').setAttribute('position', "-63 73 39")
            document.querySelector('#audio_image2_5').setAttribute('position', "-100 27 -20")
            document.querySelector('#audio_image2_6').setAttribute('position', "8 60 -84")
          }
        }


        if(Scene1Info.length === 4 && Scene === "Scene1") {
          document.querySelector('#arrow_image1_1').setAttribute('position', "-89 33 -26")
          document.querySelector('#arrow_image1_4').setAttribute('position', "-37 15 88")
        } else {
          document.querySelector('#arrow_image1_1').setAttribute('position', "-94 30 -26")
          document.querySelector('#arrow_image1_4').setAttribute('position', "-37 14 94")
        }


        document.querySelector("#MOVING").setAttribute(
            "rotation",currPos
        );
        document.querySelector("#MOVING-TEXT").setAttribute(
            "text","value",xLabel+"\n\n"+yLabel
        );
    
        timerID = setTimeout(graphics,100);

        return true;
      }

      const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
      }