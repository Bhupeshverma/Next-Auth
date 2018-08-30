import React from 'react'
import {connect} from "react-redux";
import Link from 'next/link';
import Head from 'next/head';
import LoginModel from './LoginModel';
import { Menu , Container, Segment, List, Grid, Header, Divider, Image, Input, Button, Message, Dropdown} from "semantic-ui-react";
import actions from "../redux/actions";
import Nav from './layout/Header'
class Layout extends React.Component {
    
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

    handleLogout = () => {
        this.props.deauthenticate();
    }

    trigger = (user) => (
    <span>
        <Image size='mini' avatar src={user.avatar_url} /> {user.username}
    </span>
    )
    render() {
      const { activeItem } = this.state
      const { isAuthenticated, children, user } = this.props
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
            { 
                isAuthenticated ?
                <Link href="/org-info">
                <Menu.Item
                name='Submit a Competition'
                active={activeItem === 'friends'}
                /></Link>
                : 
                ''
            }
            {
                isAuthenticated ?
                <Menu.Item>
                    <Dropdown trigger={this.trigger(user)}>
                    <Dropdown.Menu>
                        <Dropdown.Item  icon='sign out' text='Sign Out' onClick={this.handleLogout}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                : 
                ''
            }
            {!isAuthenticated ?
            <Menu.Item>
                <LoginModel />
            </Menu.Item>: ''}
            </Menu.Menu>
            </Container>
            </Menu>
        {/* <Nav isAuthenticated user/> */}
          {children}
          <Segment style={{ margin: '5em 0em 0em', padding: '5em 0em', background: 'azure' }} vertical>
          <Container textAlign='center'>
            <Image size='medium' src='./images/logo.png' style={{ width: '100px', margin: 'auto'}}/>
            <div>
                <Button  circular  icon='settings' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
                <Button circular  icon='tty' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
                <Button circular  icon='settings' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
                <Button circular  icon='settings' style={{background: '#000', color: '#fff', marginLeft: '20px'}}/>
            </div>
            <style jsx>{`
                div {
                    margin: 20px
                }                `}</style>
            <p>Copyright <b>® UNI</b> as UNIEGIS NETWORK PRIVATE LIMITED // All Rights Reserved</p>
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
        </div>
      )
    }
  }

  const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.token && !!state.authentication.user, user: state.authentication.user }
  );

export default connect(mapStateToProps, actions)(Layout);