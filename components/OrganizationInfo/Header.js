import { Segment, Header, Image,Grid, Icon } from 'semantic-ui-react';


export const Headbar = () => {
    return (
        <Segment>
            <Grid >
                <Grid.Row>
                <Grid.Column width={15}>
                    <Header as='h2'>
                        <Image src='./images/logo.png' avatar size='mini'/>
                        <Header.Content>
                        Organization Information
                        <Header.Subheader>Howdy! How about telling us something about yourself and your organization. </Header.Subheader>
                        </Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column width={1}>
                    <Icon name='arrow right' />
                        Next
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
    )
}

