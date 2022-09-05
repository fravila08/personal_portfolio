import Modal from 'react-bootstrap/Modal';

function ReleaseModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"  style={{color:"red"}}>
            This Pokemon was Released
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This Pokemon will no longer be in your party. You can 
            add a different Pokemon in his place in the "Projects" section.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  export default ReleaseModal;