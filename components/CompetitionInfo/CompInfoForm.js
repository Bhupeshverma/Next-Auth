import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Segment ,Container, Item, Header, Image, Grid, Form, Icon, GridColumn} from 'semantic-ui-react';
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

  
class CompInfoForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      selectedCategories: []
    }
  }
  handleChange = (e, { value }) => this.setState({ isregistered: value })

  handleCheckbox = (e, { value }) => {

    
  };
  

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
  checkboxex = [
    {key: '0', text: 'Awards/Grants/Scholarship', value: 'Awards/Grants/Scholarship'},
    {key: '1', text: 'Built/Product realisation', value: 'Built/Product realisation'},
    {key: '2', text: 'Call for papers/Abstract', value: 'Call for papers/Abstract'},
    {key: '3', text: 'Regional/National', value: 'Regional/National'},
    {key: '4', text: 'Idea', value: 'Idea'},
    {key: '5', text: 'International', value: 'International'},
    {key: '6', text: 'Multi Disciplinary', value: 'Multi Disciplinary'},
    {key: '7', text: 'Student', value: 'Student'},
    {key: '8', text: 'Young Professional', value: 'Young Professional'}
  ]

  toggle = () => this.setState({ checked: !this.state.checked })


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
              Please enter your competition title.
            </Header.Content>
        </Header>
        <Field name='title' component={renderField}
          labelPosition='left'
          placeholder='Competition Title' />
        </Grid.Column >
        <Grid.Column style={{padding: '20px'}}  stackable>
        <Header as='h4'>
            <Header.Content>
               Please select one or more categories:
            </Header.Content>
        </Header>
        <Form.Group >
        <Grid>
        <Grid.Row columns='equal' style={{padding: '20px'}} >
        ` <Grid.Column  >
            <Form.Checkbox label='Awards/Grants/Scholarship'/>
          </Grid.Column>
          <Grid.Column  >
            <Form.Checkbox label='Built/Product realisation'/>
          </Grid.Column>
          <Grid.Column >
            <Form.Checkbox label='Regional/National'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row  columns='equal' style={{padding: '20px'}} >
        ` <Grid.Column  >
            <Form.Checkbox label='Idea'/>
          </Grid.Column>
          <Grid.Column  >
            <Form.Checkbox label='International'/>
          </Grid.Column>
          <Grid.Column >
            <Form.Checkbox label='Multi Disciplinary'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row  columns='equal' style={{padding: '20px'}} >
        ` <Grid.Column  >
            <Form.Checkbox label='Student'/>
          </Grid.Column>
          <Grid.Column  >
            <Form.Checkbox label='Young Professional'/>
          </Grid.Column>
          <Grid.Column >
            <Form.Checkbox label='Call for papers/Abstract'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row  columns='equal' style={{padding: '20px'}} >
          <Grid.Column >
            <Form.Checkbox />
          </Grid.Column>
          <Grid.Column>
          <Field name='categories' component={renderField}
            labelPosition='left'
            placeholder='Others, If applicable but limited to 50 characters with spaces only.' />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        </Grid>
      </Form.Group>
          
        </Grid.Column>
        
        <Grid.Column style={{padding: '20px'}}>
        <Header as='h4' >
          <Header.Content>
            Please select upto three disciplines:
          </Header.Content>
        </Header>
        </Grid.Column>
        <Grid>
        <Grid.Row reversed='computer' columns='equal' style={{padding: '20px'}}>
            <Grid.Column >
            <Form.Select options={this.options} placeholder='Afganistan' onChange={this.handleSelect}/>
                    
            </Grid.Column>
    
            <Grid.Column >
                
                <Form.Select options={this.options} placeholder='Afganistan' onChange={this.handleSelect}/>
            </Grid.Column>
            <Grid.Column >
                
                <Form.Select options={this.options} placeholder='Afganistan' onChange={this.handleSelect}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row reversed='computer' columns='equal' style={{padding: '20px'}} >
          <Grid.Column>
          <Header.Subheader>If others, Please specify:</Header.Subheader>
          <Field name='disciplines' component={renderField}
          labelPosition='left'
          placeholder='Toy Design' />
          </Grid.Column>
        </Grid.Row>
        </Grid>
        
      </Form>
      </Grid>
      </Container>
      </Segment>
      
    )
  }
}


CompInfoForm =  reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate                 // <--- validation function given to redux-form
})(CompInfoForm)

export default connect(state=>state, actions)(CompInfoForm)