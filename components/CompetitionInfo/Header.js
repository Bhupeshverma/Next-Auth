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
                        Competition Information
                        <Header.Subheader>Give us some information about your competition</Header.Subheader>
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