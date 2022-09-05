import Modal from 'react-bootstrap/Modal';
import soul from "../images/badges/soul.png"

function SoulBadge(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"green"}}>
            NEW BADGE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Congratulations!!!</h4>
          <div style={{display:"flex"}}>
            <img src={soul} style={{height:"15vh"}} />
            <p>You have unlocked the Soul Badge! There are more Badges 
                hidden through out the site. Look through all the features to unlock them all.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default SoulBadge;