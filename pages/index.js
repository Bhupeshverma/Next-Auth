import React from "react";
import {connect} from "react-redux";
import Layout from '../components/Layout';

class Home extends React.Component {
    static async getInitialProps({store, router, ctx}) {
       
    }
    render(){
        const {user} = this.props
        return (
            <Layout>
                <div >{user ? user.username: ''}</div>
            </Layout>
            
        )
    }
}

const mapStateToProps = (state) => (
    {user: state.authentication.user}
  );
export default connect(mapStateToProps)(Home);