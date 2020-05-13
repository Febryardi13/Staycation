import React, { Component } from 'react';

import Header from 'parts/Header'

import ItemDetails from '../json/itemDetails.json'
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImages from 'parts/FeaturedImages'
import PageDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import PageDetailActivities from 'parts/PageDetailActivities'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

export default class DetailsPage extends Component {

    componentDidMount () {
        window.title = "Details Page"
        window.scroll(0, 0)
    }

    render () {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ]
        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
                <FeaturedImages data={ItemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={ItemDetails} />
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={ItemDetails} />
                        </div>
                    </div>
                </section>
                <PageDetailActivities data={ItemDetails.activities} />
                <Testimony data={ItemDetails.testimonial} />
                <Footer />
            </>
        )
    }
}