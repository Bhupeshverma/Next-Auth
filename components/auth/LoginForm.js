import React from 'react'
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { Form, Segment, Button, Message} from 'semantic-ui-react'


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'bhupesh.v94@gmail.com',
            password: 'ziddi8089@'
        }
    }
    handleSubmit = () => {
        const { email, password } = this.state
    
        this.setState({ email: email, password: password })
        this.props.authenticate({email,password}, 'signin');
      }
    render(){
        const {spinner, error, unautherized} = this.props.authentication
        return (
            <Form size='large' onSubmit={this.handleSubmit}>
                <Segment >
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.email} />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={this.state.passowrd} 
                        />
                        {
                            spinner 
                            ?
                            <Button basic loading color='teal' fluid size='large'  >
                                Login
                            </Button>
                        :
                            <Button color='teal' fluid size='large'  >
                                Login
                            </Button>
                        }
                        {
                            error
                            ?
                            <Message>
                                Some error occured Please try again
                            </Message>
                            :
                            ''
                        }
                        {
                            unautherized
                            ?
                            <Message>
                                Unautherized! Please check your credentiials
                            </Message>
                            :
                            ''
                        }
                    </Segment>
                </Form>
        )
    }
}

export default connect( state=>state, actions)(LoginForm)