import React from 'react'
import { Segment, Container, Image, Button, List } from "semantic-ui-react";


const footer = () => {
    return (
        <Segment style={{ margin: '5em 0em 0em', padding: '5em 0em', background: 'azure' }} vertical>
          <Container textAlign='center'>
            <Image size='medium' src='./images/logo.png' style={{ width: '100px', margin: 'auto'}}/>
            <div>
                <Button circular  icon='tty' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
                <Button circular  icon='tty' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
                <Button circular  icon='settings' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
                <Button circular  icon='settings' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
            </div>
            <style jsx>{`
                div {
                    margin: 20px
                },
                `}</style>
            <p >Copyright <b>® UNI</b> as UNIEGIS NETWORK PRIVATE LIMITED // All Rights Reserved</p>
            <p >List/Host a compeition on UNI. Learn more about <b >Competitions on UNI</b></p>
            <style jsx>{`
                p {
                    font-size: 12px;
                    font-family: Roboto, Light;

                },
                `}</style>
            <div>
                <List horizontal divided link>
                <List.Item disabled href='#'>
                    © GitHub, Inc.
                </List.Item>
                <List.Item as='a'  href='#'><b>Help</b></List.Item>
                <List.Item href='#'><b>Join Us</b></List.Item>
                <List.Item href='#'><b>Privacy</b></List.Item>
                <List.Item href='#'><b>Terms</b></List.Item>
                <List.Item href='#'><b>About</b></List.Item>
                </List>
            </div> 
          </Container>
          </Segment>
    )
}

export default footer;