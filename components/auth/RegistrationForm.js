import React from 'react'
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { Form, Segment, Button} from 'semantic-ui-react'


class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            passowrd: '',
            confirmPassword: ''
        }
    }
    handleSubmit = () => {
        const { firstName, lastName, email, passowrd, confirmPassword} = this.state
    
        this.setState({ firstName: firstName, lastName: lastName, passowrd: passowrd })
        this.props.auth({email,password}, 'signup');
      }
    render(){
        return (
            <Form size='large' onSubmit={this.handleSubmit}>
                <Segment >
                <Form.Group>
                    <Form.Input label='First name' placeholder='First Name' width={10} />
                    <Form.Input label='Last Name' placeholder='Last Name' width={10} />
                    </Form.Group>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.email} />
                    <Form.Group>
                    <Form.Input fluid icon='lock' label='password' placeholder='password' width={10} />
                    <Form.Input fluid icon='lock' label='Confirm password' placeholder='confirm password' width={10} />
                    </Form.Group>
                <Button color='teal' fluid size='large'  >
                    Register
                    </Button>
                </Segment>
                </Form>
        )
    }
}

export default connect(state=> state, actions)(RegisterForm)