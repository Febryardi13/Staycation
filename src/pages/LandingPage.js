import React, { Component } from 'react'
import landingPage from 'json/landingPage.json'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

export default class LandingPage extends Component {
    constructor (props){
        super(props)
        this.refMousePicked = React.createRef();
    }
    
    componentDidMount () {
        window.title = "Staycation | Home";
        window.scroll(0, 0);
    }
    

    render() {
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

