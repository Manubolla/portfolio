import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./index.scss";
import Folder from "../folder";


const CustomModal = ({project}) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div onClick={() => setShow(true)}>
        <Folder name={project.name} />
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex" }}>
          <p style={{ padding: 20 }}>
           {project.description}
          </p>
          <Image
            src={project.logo}
            className="project-logo"
          />
        </Modal.Body>
        <Modal.Footer>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Watch my code!</Tooltip>}
          >
            <a
              href={project.socials.github}
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="ion-social-github"></i>
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Watch a short video of the app</Tooltip>}
          >
            <a
              href={project.socials.youtube}
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="ion-social-youtube"></i>
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Deployed app</Tooltip>}
          >
            <a
              href={project.socials.deployedWeb}
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="ion-ios-glasses"></i>
            </a>
          </OverlayTrigger>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CustomModal;
