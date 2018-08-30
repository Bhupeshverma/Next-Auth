import React from 'react'
import { Segment, Header, Container,Form ,Grid} from 'semantic-ui-react';



class InfoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'yes'
        }
    }
    handleChange = (e, { value }) => this.setState({ value })

    options = [
        { key: 'a', text: 'Afganistan', value: 'Afganistan' },
        { key: 'i', text: 'India', value: 'India' },
      ]
    render(){
        const { value } = this.state
        return (
            <Segment >
                <Grid style={{marginLeft: '15%',marginRight: '15%'}}  stackable>
                <Form style={{margin: 'auto'}} >
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
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='organization name' />
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
                                    checked={value === 'yes'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label='No'
                                    value='no'
                                    checked={value === 'no'}
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
                            <Form.Select options={this.options} placeholder='Afganistan' />
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
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='someone@email.com' />  
                    </Grid.Column>
                    <Grid.Column style={{padding: '20px'}}  stackable>
                    <Header as='h4' >
                        <Header.Content>
                            Organizer's website 
                        <Header.Subheader>Please enter the organizing website and not the competition listing website address. (optional)</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='https://example.com' />
                    </Grid.Column>
                </Form>
                </Grid>
            </Segment>
        )
    }
}
export default InfoForm;