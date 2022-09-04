import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"green"}}>
            You Captured a Pokemon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Congratulations!!!</h4>
          <p>
            You have added a pokemon into your team! To see your team click on 
            "My Profile" on the upper right hand corner. 
          </p>
        </Modal.Body>
        <Modal.Footer style={{color:"red", textDecoration:"underline"}}>
          <p>You can only hold 6 Pokemon in your party.</p>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;