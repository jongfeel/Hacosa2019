window.onload = () => {
    let isFront = false;
   
    let webcam = () => {
        // Prefer camera resolution nearest to 1280x720.
        let constraints = {
           video: {
               width: 1280,
               height: 720,
               facingMode: (isFront ? "environment" : "user")
           }
       }; 
   
       navigator.mediaDevices.getUserMedia(constraints)
           .then(mediaStream => {
               let video = document.querySelector('video');
               video.srcObject = mediaStream;
               video.onloadedmetadata = e => video.play();
               console.log(mediaStream);
           })
           // always check for errors at the end.
           .catch(err => console.log(err.name + ": " + err.message));
    };

    document.querySelector('button').onclick = () => {
        isFront = !isFront;
        document.querySelector('button').innerHTML = isFront ? "Front" : "Rear";
        webcam();
    }
    webcam();
}