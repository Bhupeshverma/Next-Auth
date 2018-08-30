import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link';
import Head from 'next/head';


class Layout extends React.Component {
    render(){
        const { isAuthenticated, children, user } = this.props
        
        return (
            <div>
                <Head >
                    <title>Competitions</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
                    />
                </Head>
                <header>
                <Header isAuthenticated={isAuthenticated} user={user}/>
                </header>
                <main style={{marginTop: '80px'}}>
                {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.user, user: state.authentication.user  }
  );
export default connect(mapStateToProps)(Layout);