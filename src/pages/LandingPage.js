import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import { fetchPage } from 'store/actions/page'

class LandingPage extends Component {
    constructor (props){
        super(props)
        this.refMousePicked = React.createRef();
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
            return null
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

