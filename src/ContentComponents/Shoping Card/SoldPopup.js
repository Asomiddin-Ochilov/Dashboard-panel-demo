import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';
import {SoldBlock, SoldBody, SoldCloseBtn, SoldHeader} from "./ShoppingStyled";
import imgs from './checked.png'
import {useHistory } from 'react-router-dom'
import './Popup.css'
import {useDispatch,useSelector} from "react-redux";
import {SoldCard} from "../../Store/Redux/Cart Reducer";
import {Modal,ModalHeader} from "reactstrap";
import {useState} from "react";
const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:'16px',
    boxShadow: 24,

};

export default function SoldPopup() {
    const history  = useHistory()
 const [state,setState] = useState(true)
    const handleClose = () => {

     history.push('/orders')

    }

    return (
        // <div>
        //     <div onClick={HandelS}>Checkout</div>
        //     <Modal
        //         aria-labelledby="spring-modal-title"
        //         aria-describedby="spring-modal-description"
        //         open={open}
        //         closeAfterTransition
        //         BackdropComponent={Backdrop}
        //         BackdropProps={{
        //             timeout: 500,
        //         }}
        //     >
        //         <Fade in={open}>
        //             <Box sx={style} className={'sold-popup'}>
        //
        //             </Box>
        //         </Fade>
        //     </Modal>
        // </div>

        <Modal isOpen={state} toggle={handleClose}>
            <ModalHeader>

                <SoldBlock>
                    <SoldHeader>
                        <img src={imgs} width={95} height={95} alt=""/>
                    </SoldHeader>
                    <SoldBody>
                        All products you selected are sold.
                    </SoldBody>
                    <SoldCloseBtn onClick={handleClose}>Close</SoldCloseBtn>
                </SoldBlock>
            </ModalHeader>
        </Modal>
    );
}