import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './product style.css'
import {useDispatch} from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:'10px'
};


export default function Description({item}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{
        setOpen(true);

    }
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()


    return (
        <div>
            <div onClick={handleOpen}>
                {item ? item.substring(0,10) : item}...
            </div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} className={'delete-box'}>
                    <div className={'Description'}>
                        <p>{item}</p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
