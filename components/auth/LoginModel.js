import React from 'react'
import {connect} from "react-redux";
import { Button, Header, Image, Modal, Grid, Segment, Form, Message } from 'semantic-ui-react'
import actions from "../../redux/actions";
import Link from 'next/link';
import LoginForm from './LoginForm';
import RegisterForm from './RegistrationForm'



class LoginModel extends React.Component {
    constructor(props){
        super(props);
        this.state =  
        { 
            email: 'bhupesh.v94@gmail.com', 
            password: 'ziddi8089@',
            loginState: true,
            registerState: false 
        }
    }
    handleSubmit = () => {
        const { email, password } = this.state
    
        this.setState({ email: email, password: password })
        this.props.authenticate({email,password}, 'signin');
      }

    registerationForm = () => {
        this.setState({
            loginState: !this.state.loginState
        })
    }
    render(){
        const {spinner} = this.props;
        return (
            <Modal  dimmer='blurring' trigger={<Button style={{background: 'transparent'}}>Login</Button>} centered={false} closeIcon style={{top: '25%',maxWidth: '600px', left: '60%', height: '500px'}}>
                
                <Modal.Content image>
                <Image wrapped size='medium' src='./images/logo.png' />
                <Modal.Description style={{ width: '100%', height: '100%'}}>
                    { 
                        this.state.loginState 
                        ? 
                        <LoginForm spinner/>
                    :
                        <RegisterForm />
                    }
                    {
                        this.state.loginState
                        ?
                        <Message>
                            New to us?<Button basic onClick={this.registerationForm}>SignUp</Button>
                            </Message>
                        :
                        <Message>
                            Already have an Account?<Button basic onClick={this.registerationForm}>SignIn</Button>
                            </Message>
                    }
                </Modal.Description>
                </Modal.Content>
            </Modal>
            
        )
    }
}
const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.user, spinner: !!state.authentication.spinner}
  );
export default connect(mapStateToProps,actions)(LoginModel)