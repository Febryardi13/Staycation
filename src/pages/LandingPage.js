import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import { fetchPage } from 'store/actions/page'

import {css} from "@emotion/core"
import ScaleLoader from 'react-spinners/ScaleLoader'

const override = css`
  display: block;
  margin: auto;
  border-color: red;
  justify-content: center;
`;

class LandingPage extends Component {
    constructor (props){
        super(props)
        this.refMousePicked = React.createRef();
        this.state = {
            loading: true
        }
    }
    
    componentDidMount () {
        window.title = "Staycation | Home";
        window.scroll(0, 0);

        if(!this.props.landingPage) {
            this.props.fetchPage(`/landing-page`, 'landingPage')
        }
    }
    

    render() {
        const { page } = this.props
        if(!page.hasOwnProperty("landingPage")) {
            return (
                <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
                    <ScaleLoader
                        css={override}
                        size={150}
                        color={"#4764e2"}
                        loading={this.state.loading}
                    />
                </div>
            )
        }
        
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMousePicked={this.refMousePicked} data={page.landingPage} />
                <MostPicked refMousePicked={this.refMousePicked} data={page.landingPage} />
                <Categories data={page.landingPage}/>
                <Testimony data={page.landingPage.testimonial}/>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, {fetchPage})(LandingPage)

