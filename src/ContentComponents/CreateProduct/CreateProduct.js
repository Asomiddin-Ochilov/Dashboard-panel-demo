
import React, {useState} from 'react'
import {Page} from "../../StyledHomejs/StyledComponent";
import {AddImg, AddProductBtn, Block1, Block2, BlockMobile, Labels} from "./CreateStyled";
import { AvField,AvForm } from 'availity-reactstrap-validation';
import imgs from './imag.png'
import { Select } from 'antd';
import './CreateStyle.css'
import {useDispatch} from "react-redux";
import axios from "axios";
import {AddProduct} from "../../Store/Redux/redux";
import PropagateLoader from '@bit/davidhu2000.react-spinners.propagate-loader';
function CreateProduct() {
    const [img,setImg] = useState('')
    const [category,setCategory] = useState('')
    const [loader,setLoader] = useState(false);

    const dispatch =  useDispatch()

    const { Option } = Select;

    function handleChange(value) {
    setCategory(value)
    }


    function Add(event,values) {
        const yesday = new Date()
        const Day = yesday.getDate()
        const Mon = yesday.getMonth() + 1
        const Year = yesday.getFullYear()
        const YesDay = `${Year}-${Mon}-${Day}`

        const value = {
            ...values,
            imageId:img,
            category:category ? category : values.category,
            createdAt:YesDay
        }

    dispatch(AddProduct(value))

    }

    function AddMobile(event,values) {
        const value = {
            ...values,
            imageId:img,
            category:category ? category : values.category
        }

        dispatch(AddProduct(value))

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
        }).catch((err)=>{
            console.log(err);
        })

    }



    return(
        <Page>
            <AvForm className={'form-block '} id={"m"} onValidSubmit={Add}>
            <Block1>
                <h4 className={'my-4 h4 mx-4'}>Create a new product</h4>

                    <AvField className={'avForm'}
                             placeholder={'Product Name'}
                             name={'productName'}
                             required/>

                    <Labels className={'my-4 description'}>Description</Labels>

                    <AvField className={'avForm-1'}
                             type={'textarea'}
                             placeholder={'Write something awesome...'}
                             name={'Description'}
                             required
                    />



                <div className={'labels my-3'}>Add images

                    {
                        img ?  <span className={'ggg'} onClick={()=>{
                            setLoader(false); setImg('')
                            }}> <i className="bi bi-x-lg"></i> </span>
                            :''
                    }
                   </div>

                    <label htmlFor="input" className={'label-input'}>

                        {
                            img ?
                                <div className={'img-div'}>

                                    <img className={'form-img'} src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`} alt="reeor"/>

                                </div>

                                :
                                <div className={'position-relative loader-div'}>
                                    {
                                        loader ? <div className={'m-auto d-flex justify-content-center'}>
                                                <PropagateLoader
                                                    size='30'
                                                    color='#4BA85E'
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
                        type="file"
                        onChange={HandelImg}
                        id={'input'}
                        className={'d-none'}
                    />
            </Block1>

            <Block2>

                <div className={'box'}>
                    <Labels className={'my-4 mx-1'}>Category</Labels>

                    <Select  placeholder={'category...'}  style={{ width: 200 }} onChange={handleChange}>

                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Task">Task</Option>

                    </Select>


                        <Labels className={'my-4'}>Price</Labels>
                        <AvField className={'avForm-2'} placeholder={'Price...'} type={'number'} name={'price'} required/>
                        <Labels className={'my-4'}>Quantity</Labels>
                        <AvField className={'avForm-2'} placeholder={'Amount...'} type={'text'} name={'amount'} required/>

                </div>

                <AddProductBtn form={'m'}>Create Product</AddProductBtn>

            </Block2>
            </AvForm>

            <AvForm className={'form-block-1'} id={"m1"} onValidSubmit={AddMobile}>
                <BlockMobile>
                    <h4 className={'h4 text-center'}>Create a new product</h4>


                    <div className={'labels my-2'}> Product Name</div>

                    <AvField className={'avForm'}

                             placeholder={'Product Name'}

                             name={'ProductName'}

                             required/>

                    <div className={'labels my-2'}>Price</div>

                    <AvField className={'avForm-2'}

                             placeholder={'Price...'} type={'number'} name={'price'} required/>

                    <div className={'labels my-2'}>Amount</div>

                    <AvField className={'avForm-2'}

                             placeholder={'Amount...'} type={'number'} name={'amount'} required/>

                    <div className={'labels my-2'}>Category</div>

                    <AvField type={'select'} name={'category'}
                             placeholder={'category...'}
                             className={'avForm dropdown-toggle'}>

                        <option value="jack">Jack</option>

                        <option value="lucy">Lucy</option>

                    </AvField>

                    <div className={'labels my-2'}>Description</div>

                    <AvField className={'avForm-1'}

                             type={'textarea'}

                             placeholder={'Write something awesome...'}

                             name={'Description'}

                             required

                    />



                    <div className={'labels my-2'}>Add Images
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

                                    <img className={'form-img'} src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`} alt="reeor"/>

                                </div>

                                :
                                <div className={'position-relative loader-div'}>
                                    {
                                        loader ? <div className={'loaders'}>
                                                <PropagateLoader
                                                    size='30'
                                                    color='#4BA85E'
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
                        type="file"
                        id={'input'}
                        className={'d-none'}
                    />
                    <AddProductBtn form={"m1"}>Create Product</AddProductBtn>

                </BlockMobile>
            </AvForm>

        </Page>
    )

}
export default CreateProduct