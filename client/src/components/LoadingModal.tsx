import React from 'react';
import {Modal} from 'react-bootstrap';

/**
 *
 * Renders a loader modal.
 */

const LoadingModal = ({show, loadingText = 'Loading...'}: any) => {
  return (
    <Modal show={show}>
      <Modal.Body>
        {/* <h1 className="text-center">
          <Glyphicon glyph="refresh" />
        </h1> */}
        <h5 className="text-center">{loadingText}</h5>
      </Modal.Body>
    </Modal>
  );
};

export default LoadingModal;
