import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./index.scss";
import Folder from "../folder";

const CustomModal = ({ project }) => {
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
          <p style={{ padding: 20 }}>{project.description}</p>
          <Image src={project.logo} className="project-logo" />
        </Modal.Body>
        <Modal.Footer>
          {project.socials.github && <OverlayTrigger
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
          </OverlayTrigger>}
          {project.socials.youtube &&<OverlayTrigger
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
          </OverlayTrigger>}
          {project.socials.deployedWeb && <OverlayTrigger
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
          </OverlayTrigger>}
          {project.socials.award && <OverlayTrigger
            placement="top"
            overlay={<Tooltip>This project was awarded!</Tooltip>}
          >
            <a
              href={project.socials.award}
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-award"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
            </a>
          </OverlayTrigger>}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CustomModal;
