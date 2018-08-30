import React from "react"
import { Menu, Container, Dropdown, Image, Input, Segment} from 'semantic-ui-react';
import actions from "../../redux/actions";
import {connect} from 'react-redux'
import LoginModel from '../auth/LoginModel'
import Link from 'next/link';

class Header extends React.Component {

    static async getInitialProps({req}){
        console.log(req);
        
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

    handleLogout = () => {
        this.props.deauthenticate();
    }

    trigger = (user) => (
    <span>
        <Image size='mini' avatar src={user.avatar_url} />
    </span>
    )
    render(){
        const { activeItem } = this.state
        const { isAuthenticated, user} = this.props
        
        return (
            <div>
            <Menu  fixed='top'  >
                <Container>
                <Link prefetch href='/'>
                <Menu.Item>
                   <Image size='medium' src='./images/logo.png' style={{ width: '100px'}}/>
                </Menu.Item>
                </Link>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Menu position='right'>
                
                <Menu.Item
                as='a'
                href='http://buisness.uni.xyz'
                name='Buisness with Uni'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
                />
                { 
                    isAuthenticated ?
                    <Link prefetch href="/organizationInfo">
                    <Menu.Item
                    as='a'
                    href='/organizationInfo'
                    name='Submit a Competition'
                    active={activeItem === 'friends'}
                    /></Link>
                    : 
                    ''
                }
                {
                    isAuthenticated  ?
                    <Menu.Item>
                        <Dropdown trigger={this.trigger(user)} simple icon=''>
                        <Dropdown.Menu>
                            <Dropdown.Item  icon='user' text={user.username}/>   
                            <Dropdown.Item  icon='sign out' text='Sign Out' onClick={this.handleLogout}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    : 
                    ''
                }
                {!isAuthenticated ?
                <Menu.Item>
                    <LoginModel modalOpen={!this.state.modalOpen} />
                </Menu.Item>: ''}
                </Menu.Menu>
                </Container>
                </Menu>
                </div>
        )
}
}

export default connect(state=>state, actions)(Header)