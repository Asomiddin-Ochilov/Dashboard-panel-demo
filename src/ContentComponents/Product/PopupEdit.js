import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {EditBlock, EditSaveBtn} from "./ProductStyled";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {AddImg} from "../CreateProduct/CreateStyled";
import imgs1 from './edit.png'
import imgs from "./544604e052101826889cc3cc2ec26984.png";
import './product style.css'
import {EditProduct} from "../../Store/Redux/Delete,Edit-Redux";
import {useDispatch} from "react-redux";
import axios from "axios";

import PropagateLoader from "@bit/davidhu2000.react-spinners.propagate-loader";
import {useEffect} from "react";
import {GetProduct} from "../../Store/Redux/redux";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '36%',
    bgcolor: 'background.paper',
    boxShadow: 5,
    borderRadius: '13px'
};
const div = {
    width: 35,
    marginRight: '3px',
    border: '1px solid red'
}
export default function EditModal({edits}) {


    const [open, setOpen] = React.useState(false);
    const [img, setImg] = React.useState('');
    const [loader, setLoader] = React.useState(false);
    const dispatch = useDispatch()

    const handleOpen = () =>{
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    function EditSave(event, values) {
        const val = {
            ...values,
            id:edits.id,
            createdAt:edits.createdAt,
            imageId:img ? img : edits.imageId
        }
        dispatch(EditProduct(val))

        setOpen(false)
    }
    function HandelImg(e) {
      setLoader(true)
        const onload = e.target.files[0];

        const formData = new FormData();

        formData.append("image", onload);

        axios({
            url: "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
            method: "POST",
            data: formData,
        }).then((res) => {

            setImg(res.data)
            setLoader(false)
        }).catch((err)=>{
        })

    }
    return (
        <div>
            <div  onClick={handleOpen}>
                <i className="bi bi-pencil"></i>
            </div>
            <Modal
                open={open}
            >
                <Box sx={style} className={'box-modal'}>
                    <AvForm id={'form'} onValidSubmit={EditSave}   model={edits ? edits :{}}>

                        <EditBlock>

                            <div onClick={handleClose} className={'toggle-modal'}>
                                <i className="bi bi-x-lg"></i>

                            </div>
                            <img className={'edit-img'} width={90} height={90} src={imgs1} alt=""/>

                            <div className={'labels my-2'}> Product Name</div>
                            <AvField className={'avForm'}
                                     defaultValue={edits.productName}
                                     name={'productName'}
                                     required/>
                            <div className={'labels my-2'}>Price</div>
                            <AvField className={'avForm-2'}
                                      type={'number'} name={'price'} required/>
                            <div className={'labels my-2'}>Amount</div>
                            <AvField className={'avForm-2'}
                                   type={'number'} name={'amount'} required/>
                            <div className={'labels my-2'}>Category</div>

                            <AvField type={'select'} name={'category'}  className={'avForm'}>

                                <option value="jack">Jack</option>
                                <option value="lucy">Lucy</option>

                            </AvField>
                            <div className={'labels my-2'}>Description</div>
                            <AvField className={'avForm-1'}
                                     type={'textarea'}
                                     name={'description'}
                                     required
                            />


                            <div className={'labels my-2'}>

                                Images
                                {
                                    img ?  <span className={'ggg'} onClick={()=>{
                                            setLoader(false); setImg('')
                                        }}> <i className="bi bi-x-lg"></i> </span>
                                        :''
                                }
                            </div>



                            <label htmlFor="input" className={'mobile-input-img'}>

                                {
                                    img ?
                                        <div className={'img-div'}>

                    <img className={'form-img'}
                    src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`}
                    alt="reeor"/>

                    </div>

                      :
                      <div className={'position-relative loader-div'}>
                                            {
                                                loader ? <div className={'loders-edit'}>
                                                        <PropagateLoader
                                                            size='30'
                                                            color='#746AFC'
                                                        />
                                                    </div>
                                                    :
                                                    <AddImg>

                                                        <img src={imgs} width={200} height={200} alt=""/>

                                                        <div>
                                                            <h5>Drop or Select file</h5>
                                                            <p>Drop files here or click browse thorough your machine</p>
                                                        </div>

                                                    </AddImg>
                                            }


                                        </div>

                                }
                            </label>

                            <input
                               onChange={HandelImg}
                                type="file"
                                id={'input'}
                                className={'d-none'}
                            />
                            <EditSaveBtn form={'form'}>Save Product</EditSaveBtn>
                        </EditBlock>
                    </AvForm>
                </Box>
            </Modal>
        </div>
    );
}
