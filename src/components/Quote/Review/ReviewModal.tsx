import { Box, CircularProgress, Modal } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0.3px solid #24242480',
    boxShadow: "0px 4px 4px 0px #00000040",
    pb: 2,
    borderRadius: 1.6
};

const ChildModal: React.FC<{ childModal: boolean, handleChildModalClose: () => void }> = ({ childModal, handleChildModalClose }) => {
    return (
        <Modal
            open={childModal}
            onClose={handleChildModalClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box className="childModal" sx={{ ...style, width: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress />
                <p>Sending Quote...</p>
            </Box>
        </Modal>
    )
}

const ReviewModal: React.FC<{ openModal: boolean, handleClose: () => void }> = ({ openModal, handleClose }) => {
    const [childModal, setChildModal] = useState(false)

    const handleChildModalClose = () => {
        setChildModal(false)
    }

    const handleSubmit = () => {
        setChildModal(true)
        setTimeout(()=> {
            setChildModal(false)
            handleClose()
            toast.success("RFQ ID sent successfully!")
        }, 3000)
    }

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box className="confirmModal" sx={{ ...style, }}>
                <h5>Confirmation</h5>
                <p>You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?</p>
                <div>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSubmit}>Continue</button>
                </div>
                <ChildModal childModal={childModal} handleChildModalClose={handleChildModalClose} /> 
            </Box>
        </Modal>
    )
}

export default ReviewModal