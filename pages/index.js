import React from "react";
import {connect} from "react-redux";
import Layout from '../components/Layout';

class Home extends React.Component {
    static async getInitialProps({store, router, ctx}) {
       
    }
    render(){
        return (
            <Layout isAuthenticated>
                <div >Hello</div>
            </Layout>
            
        )
    }
}

const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.token}
  );
export default connect(mapStateToProps)(Home);