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
    document.querySelector('#camera').setAttribute('zoom', 1)
})

document.querySelector("#arrow_image2_1").addEventListener('click', async()=>{
  const skyElement = document.querySelector('#background');
  let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
  document.querySelector('#audio_image2_1').setAttribute('position', "47 50 80")
  document.querySelector('#arrow_image2_1').setAttribute('position', "47 50 80")
  document.querySelector('#audio_image2_2').setAttribute('position', "55 25 -92")
  document.querySelector('#arrow_image2_2').setAttribute('position', "55 25 -92")
  document.querySelector('#audio_image2_3').setAttribute('position', "4 -20 100")
  document.querySelector('#audio_image2_4').setAttribute('position', "-63 73 39")
  document.querySelector('#audio_image2_5').setAttribute('position', "-100 27 -20")
  document.querySelector('#audio_image2_5').setAttribute('position', "8 60 -84")
  
  skyElement.setAttribute('src', '#scene3BW')
  Scene = "Scene3"
  document.querySelector('#camera').setAttribute('zoom', 1)
})


document.querySelector("#arrow_image2_2").addEventListener('click', async()=>{
  const skyElement = document.querySelector('#background');
  let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
  document.querySelector('#audio_image2_1').setAttribute('position', "47 50 80")
  document.querySelector('#arrow_image2_1').setAttribute('position', "47 50 80")
  document.querySelector('#audio_image2_2').setAttribute('position', "55 25 -92")
  document.querySelector('#arrow_image2_2').setAttribute('position', "55 25 -92")
  document.querySelector('#audio_image2_3').setAttribute('position', "4 -20 100")
  document.querySelector('#audio_image2_4').setAttribute('position', "-63 73 39")
  document.querySelector('#audio_image2_5').setAttribute('position', "-100 27 -20")
  document.querySelector('#audio_image2_5').setAttribute('position', "8 60 -84")
  
  skyElement.setAttribute('src', '#scene1BW')
  Scene = "Scene1"
  document.querySelector('#camera').setAttribute('zoom', 1)
})