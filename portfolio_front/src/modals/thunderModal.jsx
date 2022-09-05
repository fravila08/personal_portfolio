import Modal from 'react-bootstrap/Modal';
import thunder from "../images/badges/thunder.png"

function ThunderBadge(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modals'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"green"}}>
            NEW BADGE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Congratulations!!!</h4>
          <div style={{display:"flex"}}>
            <img src={thunder} style={{height:"15vh"}} />
            <p>You have unlocked the Thunder Badge! There are more Badges 
                hidden through out the site. Look through all the features to unlock them all.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default ThunderBadge;