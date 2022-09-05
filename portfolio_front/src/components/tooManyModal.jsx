import Modal from 'react-bootstrap/Modal';

function NeedToRelease(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"red"}}>
            Your Party is Full
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Sorry</h4>
          <p>
            You are only allowed to have 6 Pokemon in your party. If you wish to add a 
            new Pokemon you must relase some of the Pokemon already in your party. 
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  export default NeedToRelease;