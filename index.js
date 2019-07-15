function graphics() {
    var currPos=document.querySelector("#CAMERA").getAttribute('rotation');
    var currX=currPos.x%360;
    var currY=currPos.y%360;
    if (currX < 0) {currX = currX+360}
    if (currY < 0) {currY = currY+360}
    var xLabel="X: "+ currX.toFixed(2);
    var yLabel="Y: "+ currY.toFixed(2);
    var skyElement = document.querySelector('#background');

    if( (currX > 346 || currX < 11) && (currY > 65 && currY < 100) ) {
        skyElement.setAttribute('src', '#scene11')
        document.querySelector('#audio_image1_1').setAttribute('position', "-45 15 -2")
    } 
    else if( (currX > 358 || currX < 2) && (currY > 154 && currY < 160) ) {
        skyElement.setAttribute('src', '#scene14')
        document.querySelector('#audio_image1_4').setAttribute('position', "-30 8 70")
    }
    // else if( (currX > 358 || currX < 2.5) && (currY > 23 && currY < 52) ) {
    //     skyElement.setAttribute('src', '#scene12')
    // } 
    else {
        skyElement.setAttribute('src', '#scene1BW')
        document.querySelector('#audio_image1_1').setAttribute('position', "-405 10 -2")
        document.querySelector('#audio_image1_4').setAttribute('position', "-300 8 70")
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




$(document).ready(function(){
    graphics();
  });

