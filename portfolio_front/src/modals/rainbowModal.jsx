import Modal from 'react-bootstrap/Modal';
import rainbow from "../images/badges/rainbow.png"

function RainbowBadge(props) {
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
            <img src={rainbow} style={{height:"15vh"}} />
            <p>You have unlocked the Rainbow Badge! There are more Badges 
                hidden through out the site. Look through all the features to unlock them all.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default RainbowBadge;