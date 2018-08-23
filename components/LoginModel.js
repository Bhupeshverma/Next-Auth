import React from 'react'
import {connect} from "react-redux";
import { Button, Header, Image, Modal, Grid, Segment, Form, Message } from 'semantic-ui-react'
import actions from "../redux/actions";


class LoginModel extends React.Component {
    constructor(props){
        super(props);
        this.state =  { email: 'bhupesh.v94@gmail.com', password: 'ziddi8089@' }
    }
    handleSubmit = () => {
        const { email, password } = this.state
    
        this.setState({ email: email, password: password })
        this.props.authenticate({email,password}, 'signin');
      }
    render(){

        return (
            <Modal trigger={<Button>Login</Button>} centered={false} closeIcon style={{top: '25%',maxWidth: '600px', left: '60%', height: 'auto'}}>
                <Modal.Content image>
                <Image wrapped size='medium' src='./images/logo.png' />
                <Modal.Description>
                <Grid >
                <Grid.Column >
                    <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.email} />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={this.state.passowrd} 
                        />

                        <Button color='teal' fluid size='large'  >
                        Login
                        </Button>
                    </Segment>
                    </Form>
                    <Message>
                    New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
                </Grid>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.token}
  );

export default connect(mapStateToProps, actions)(LoginModel)