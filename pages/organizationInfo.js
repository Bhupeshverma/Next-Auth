import React from "react"
const Layout = dynamic(import('../components/layout/Layout'))
import dynamic from 'next/dynamic'
import { Container, Segment } from "semantic-ui-react";
import  {Headbar}  from "../components/OrganizationInfo/Header";
import InfoForm from "../components/OrganizationInfo/OrginfoForm";


class Organizationinfo extends React.Component {
    static async getInitialProps({ req, pathname, ctx }) {
        console.log(ctx);
        
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
      }
    render(){
        return(
            <Layout>
                <Container style={{paddingLeft: '100px',paddingRight: '100px'}}>
                    <Headbar/>
                    <InfoForm />
                </Container>
            </Layout>
        )
    }
}

export default Organizationinfo;