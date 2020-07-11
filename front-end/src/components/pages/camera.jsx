import React from "react";
import Webcam from "react-webcam";
import { Button} from 'semantic-ui-react'

const Camera = (props) => {
    const webcamRef = React.useRef(null);
     const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      envoiPhoto(imageSrc);
    }, [webcamRef, setImgSrc]);

    function envoiPhoto(photo){
      props.envoiPhoto(photo);
      
  }
    
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <Button circular icon='camera ' color='green' onClick={capture} style={{margin: "15px"}}/>
       
        {imgSrc && (
          <img
            src={imgSrc} alt="" style={{width: "150px", paddingBottom: "170px"}}
          />
        )}
      </>
    );
  };
  export default Camera;
 