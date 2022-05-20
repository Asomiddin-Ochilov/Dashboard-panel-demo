import React, {useState} from 'react'
function SingIn(props) {

    const [labelLogin, setLabelLogin] = useState('');
    const [labelPassword, setLabelPassword] = useState('');
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    function submitLogin() {
        if(inputLogin === 'Admin@1234' && inputPassword === 'Pass@1234') {

            props.log('false')

        }
        if(inputLogin !=='Admin@1234' ) {
            setLabelLogin(' Invalid login.')
        }
        else {
            setLabelLogin('')
        }
        if(inputPassword!=='Pass@1234'){
            setLabelPassword('Invalid Password.')
        }
        else{

            setLabelPassword('')
        }

    }

    return(
            <div className={'bg-grow'}>

                <div className={'SingUp'}>
                    <div className={'border-radius'}>
                        <i className="bi bi-person-fill"></i>
                    </div>

                    <div className={'block'}>

                    </div>
                    <input maxLength={20} onChange={(event)=>setInputLogin(event.target.value)}
                           className={'form-control input'} placeholder={'Login'} type="text"/>
                    <div className={'errors'}>
                        {labelLogin}
                    </div>

                    <input maxLength={20} onChange={(event)=>setInputPassword(event.target.value)}
                           className={'form-control input '} placeholder={'Password'} type="password"/>

                    <div className={'errors'}>
                        {labelPassword}
                    </div>
                    <br/>

                    <button onClick={submitLogin} className={'submit-login'}>Submit</button>

                </div>
            </div>

    )

}
export default SingIn