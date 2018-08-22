import React from "react";
import Link from 'next/link';
import {connect} from "react-redux";
import '../assets/css/bulma.min.css';

class Home extends React.Component {
    static async getInitialProps({store, router, ctx}) {
       const isAuthenticated = store.getState().authentication.token
       console.log('ctx'+ctx);
       
    }
    render(){
        return (
            <div className="tabs is-centered">
                <ul>
                    <Link href="/"><a>Home</a></Link>
                    {this.props.isAuthenticated ? <Link href="/whoami"><a>Who Am I</a></Link>: <p>HEllo</p> }
                    
                </ul>
            </div>
        )
    }
}
export default connect(state => state)(Home);