import React from 'react'
import {connect} from "react-redux";
import Link from 'next/link';
import Head from 'next/head';
import LoginModel from './LoginModel';
import { Menu , Container, Segment, List, Grid, Header, Divider, Image, Input, Icon, Button, Message} from "semantic-ui-react";


class Layout extends React.Component {
    

    static  getInitialProps({store, isServer, pathname, query}) {
        console.log(isServer);
        
    }

    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
            activeItem: 'home'
        }
    }
  
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name, })
    }
  
    handleLogin = () => {
        this.setState({modalOpen: true})
    }
    render() {
      const { activeItem } = this.state
      const { isAuthenticated, children } = this.props
      return (
        <div>
          <Head>
            <title>Competitions</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
            />
          </Head>
          <Menu secondary style={{ boxShadow: '1px 1px 1px lightgrey'}}>
            <Container>
            <Menu.Item>
                <Image size='medium' src='./images/logo.png' style={{ width: '100px'}}/>
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Menu position='right'>
            
            <Menu.Item
            name='Buisness with Uni'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            />
            { isAuthenticated ?<Menu.Item
            name='Submit a Competition'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
            />: ''}
            {isAuthenticated ?<Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handle}
            />: ''}
            {!isAuthenticated ?
            <Menu.Item>
                <LoginModel />
            </Menu.Item>: ''}
            </Menu.Menu>
            </Container>
            </Menu>
          {children}
          <Segment style={{ margin: '5em 0em 0em', padding: '5em 0em', background: 'azure' }} vertical>
          <Container textAlign='center'>
            <Image size='medium' src='./images/logo.png' style={{ width: '100px', margin: 'auto'}}/>
            <div style={{margin: '20px'}}>
                <Button circular  icon='settings' style={{marginLeft: '15px', backgroundColor: '#000', color: '#fff'}}/>
                <Button circular  icon='tty' style={{marginLeft: '15px', backgroundColor: '#000', color: '#fff'}}/>
                <Button circular  icon='settings' style={{marginLeft: '15px', backgroundColor: '#000', color: '#fff'}}/>
                <Button circular  icon='settings' style={{marginLeft: '15px', backgroundColor: '#000', color: '#fff'}}/>
            </div>
            <p style={{fontSize: '12px', fontfamily: 'Roboto, Light'}}>Copyright <strong  style={{fontWeight: 'bolder'}}>® UNI</strong> as UNIEGIS NETWORK PRIVATE LIMITED // All Rights Reserved</p>
            <p style={{fontSize: '12px', fontfamily: 'Roboto, Light'}}>List/Host a compeition on UNI. Learn more about <b >Competitions on UNI</b></p>
            <div>
                <List horizontal divided link>
                <List.Item disabled href='#'>
                    © GitHub, Inc.
                </List.Item>
                <List.Item as='a'  href='#'>Help</List.Item>
                <List.Item href='#'>Join Us</List.Item>
                <List.Item href='#'>Privacy</List.Item>
                <List.Item href='#'>Terms</List.Item>
                <List.Item href='#'>About</List.Item>
                </List>
            </div> 
          </Container>
          </Segment>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.token}
  );

export default connect(mapStateToProps)(Layout);