import React, { useState } from "react";
import Camera from "./camera";
import { Button, Modal } from "semantic-ui-react";

const ModalPhoto = (props) => {
  const [imagSrc, setImageSrc] = useState();

  function ajoutPhoto(photo) {
    setImageSrc(photo);
    props.ajoutPhoto(photo);
  }

  return (
    <Modal
      trigger={
        <Button circular icon="camera " color="green" className="floatBnt" />
      }
    >
      <Modal.Content image>
        <Modal.Description>
          <Camera envoiPhoto={ajoutPhoto} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalPhoto;
