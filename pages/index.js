import React from "react";
import {connect} from "react-redux";
import dynamic from 'next/dynamic'
const Layout = dynamic(import('../components/layout/Layout'))


class Home extends React.Component {
    render(){
        const {user} = this.props
        return (
            <Layout >
                <div >{user ? user.username: ''} </div>
            </Layout>
            
        )
    }
}
const mapStateToProps = (state) => (
    {user: state.authentication.user}
  );
export default connect(mapStateToProps)(Home);