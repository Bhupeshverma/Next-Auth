import React from "react"
const Layout = dynamic(import('../components/layout/Layout'))
import dynamic from 'next/dynamic'
import { Container, Segment } from "semantic-ui-react";
import  {Headbar}  from "../components/CompetitionInfo/Header";
import CompInfoForm from "../components/CompetitionInfo/CompInfoForm";


class Organizationinfo extends React.Component {
    render(){
        return(
            <Layout>
                <Container style={{paddingLeft: '100px',paddingRight: '100px'}}>
                    <Headbar/>
                    <CompInfoForm/>
                </Container>
            </Layout>
        )
    }
}

export default Organizationinfo;