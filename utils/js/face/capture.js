const video=document.getElementById("video");
    
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
        faceapi.nets.faceExpressionNet.loadFromUri('../models')
    ]).then(startVideo)


function startVideo(){
    navigator.getUserMedia(
        { video  : { } } ,
        stream => (video.srcObject = stream),
        err=> console.log(err)
    )   
}


video.addEventListener('play',()=>{

    // const canvas = faceapi.createCanvasFromMedia(video);
    // document.body.append(canvas);
    var canvas=document.getElementById('canvas');
    const displaySize ={
        width: video.width,
        height: video.height}

    faceapi.matchDimensions(canvas,displaySize)
    setInterval(async ()=>{
        const detections =await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()

            canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
            const resizedDetections = 
            faceapi.resizeResults(detections,displaySize);
            faceapi.draw.drawDetections(canvas,resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas,resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas,resizedDetections)
    },100)
})