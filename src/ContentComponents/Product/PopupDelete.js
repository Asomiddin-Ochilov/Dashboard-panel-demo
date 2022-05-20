import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {CloseBtn, DeleteBlock, DeleteBtn} from "./ProductStyled";
import './product style.css'
import {useDispatch} from "react-redux";
import {DeleteProduct} from "../../Store/Redux/Delete,Edit-Redux";
import {useEffect} from "react";
import {GetProduct} from "../../Store/Redux/redux";

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
const div  = {
    width:35,
    margin:'0 10px',
    border:'1px solid red'
}

export default function DeleteModal({deletes}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{
        setOpen(true);

    }
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()

    function DeleteProd() {

        dispatch(DeleteProduct(deletes.id))

        setOpen(false)

    }

    return (
        <div>
            <div onClick={handleOpen}>
                <i className="bi bi-trash"></i>
            </div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} className={'delete-box'}>
                 <DeleteBlock>
                     <div className={'icons'}>
                         <i className="bi bi-exclamation-circle"></i>
                     </div>
                     <div className={'delete-tex'}>
                         <div>Are you sure you want to delete this item?</div>
                     </div>
                     <div className={'delete-btn'}>
                         <CloseBtn onClick={handleClose}>Cancel</CloseBtn>
                         <DeleteBtn onClick={DeleteProd}>Delete Product</DeleteBtn>
                     </div>
                 </DeleteBlock>
                </Box>
            </Modal>
        </div>
    );
}
