// navigating to different screens
document.querySelector("#arrow_image1_1").addEventListener('click', async()=>{
    const skyElement = document.querySelector('#background');
    let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
    document.querySelector('#audio_image1_1').setAttribute('position', "-96 27 -25")
    document.querySelector('#audio_image1_4').setAttribute('position', "-29 20 98")
    document.querySelector('#audio_image1_3').setAttribute('position', "52 -15 -86")
    document.querySelector('#audio_image1_2').setAttribute('position', "-75 71 1")
    document.querySelector('#arrow_image1_1').setAttribute('position', "-94 30 -26")
    document.querySelector('#arrow_image1_4').setAttribute('position', "-37 14 94")
    skyElement.setAttribute('src', '#scene2BW')
    Scene = "Scene2"
  })