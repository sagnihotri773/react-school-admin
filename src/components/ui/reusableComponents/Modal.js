// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: "scroll"
//   }
// }));

// export default function CModal(props) {
//   const classes = useStyles();


//   return (
//     <Modal
//       aria-labelledby="transition-modal-title"
//       aria-describedby="transition-modal-description"
//       className={classes.modal}
//       open={props.open}
//       onClose={props.handleModalClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500,
//       }}
//     >
//       <Fade in={props.open}>
//         {props.children}
//       </Fade>
//     </Modal>
//   );
// }

import React from 'react';

const Modal = ({ show, onClose, children, footer, title }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full" style={{ height: "90%", width: "85%" }}>
        <div className="grid grid-cols-2 gap-2 bg-gray-100 px-4 py-1 sm:px-6 text-black top-2">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{'School Name'}</h2>
          </div>
          <div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>

  );
};

export default Modal;