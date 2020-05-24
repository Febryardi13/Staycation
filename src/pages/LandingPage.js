import React, { Component } from 'react'
import landingPage from 'json/landingPage.json'
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
            this.props.fetchPage(`https://adm-staycation.herokuapp.com/api/v1/member/landing-page`, 'landingPage')
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
                <Hero refMousePicked={this.refMousePicked} data={landingPage.hero} />
                <MostPicked refMousePicked={this.refMousePicked} data={landingPage.mostPicked} />
                <Categories data={landingPage.categories}/>
                <Testimony data={landingPage.testimonial}/>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, {fetchPage})(LandingPage)

