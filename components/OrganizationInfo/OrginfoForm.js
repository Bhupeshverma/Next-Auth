import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Segment ,Container, Item, Header, Image, Grid, Form, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.website) {
    errors.website = 'Required'
  } 
  return errors
}

const renderField = ({ input, label, type, placeholder,  meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </div>
  </div>
)

  
class InfoForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isregistered: 'yes',
      registerCountry: ''
    }
  }
  handleChange = (e, { value }) => this.setState({ isregistered: value })

  onFormSubmit(values){
    if (this.state.isregistered === 'yes') {
      values.isregistered = this.state.isregistered
      values.registerCountry = this.state.registerCountry
    }
    
    this.props.orgInfoAction(values)
  }
  handleSelect = (e, { value }) => this.setState({registerCountry: value})

   options = [
    { key: 'a', text: 'Afganistan', value: 'afganistan' },
    { key: 'i', text: 'India', value: 'india' },
  ]
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    const { isregistered } = this.state
    return (
      <Segment>
      <Container>
      <Grid>
      <Form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
      <Grid.Column style={{padding: '20px'}}  stackable>
        <Header as='h4'>
            <Header.Content>
                How will people identify your organization?
            <Header.Subheader> Upload your organization's logo (this logo will be visible on your competition listing page)</Header.Subheader>
            </Header.Content>
        </Header>
        </Grid.Column >
        <Grid.Column style={{padding: '20px'}}  stackable>
        <Header as='h4'>
            <Header.Content>
                What is your organization name? 
            <Header.Subheader>The name can be of a person in case of an individual (this information will be public)</Header.Subheader>
            </Header.Content>
        </Header>
        <Field name='username' component={renderField}
          labelPosition='left'
          placeholder='Organization Name' />
        </Grid.Column>
        <Grid>
        <Grid.Row style={{padding: '20px'}}  stackable>
            <Grid.Column width={8}  stackable>
                <Header as='h4' >
                    <Header.Content>
                        Is your organization registered?
                    <Header.Subheader>e.g. an incorporate entity, like LLC, corporation, etc.</Header.Subheader>
                    </Header.Content>
                    </Header>
                    <Form.Group inline>
                    <Form.Radio
                        label='Yes'
                        value='yes'
                        checked={isregistered === 'yes'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='No'
                        value='no'
                        checked={isregistered === 'no'}
                        onChange={this.handleChange}
                    />
                    
                    </Form.Group>
            </Grid.Column>
    
            <Grid.Column width={8}  stackable>
                <Header as='h4' floated='right'>
                    <Header.Content>
                    <Header.Subheader>If yes, Please select the country of registration.</Header.Subheader>
                    </Header.Content>
                </Header>
                <Form.Select options={this.options} placeholder='Afganistan' onChange={this.handleSelect}/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        <Grid.Column style={{padding: '20px'}}  stackable>
        <Header as='h4' >
        <Header.Content>
            Organizer's email ID 
        <Header.Subheader>This email ID will be displayed publicly, all the communication and inquiries will be sent on this email ID. A verification mail will be sent on the mail ID. (optional, if left blank all the correspondence will happen with</Header.Subheader>
        </Header.Content>
        </Header>
        <Field name='email' component={renderField}
          labelPosition='left'
          type='email'
          placeholder='someone@email.com' />
        </Grid.Column>
        <Grid.Column style={{padding: '20px'}}  stackable>
        <Header as='h4' >
            <Header.Content>
                Organizer's website 
            <Header.Subheader>Please enter the organizing website and not the competition listing website address. (optional)</Header.Subheader>
            </Header.Content>
        </Header>
        <Field name='website' component={renderField}
          labelPosition='left'
          type='url'
          placeholder='https://example.com' />
        </Grid.Column>
        <Form.Button  type="submit" disabled={submitting} floated='right' color='orange'>Next</Form.Button>
        {/* <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button> */}
      </Form>
      </Grid>
      </Container>
      </Segment>
      
    )
  }
}


InfoForm =  reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate                 // <--- validation function given to redux-form
})(InfoForm)

export default connect(state=>state, actions)(InfoForm)