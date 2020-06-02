import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImages from 'parts/FeaturedImages'
import PageDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import PageDetailActivities from 'parts/PageDetailActivities'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import { checkoutBooking } from 'store/actions/checkout'
import { fetchPage } from 'store/actions/page'

class DetailsPage extends Component {

    componentDidMount () {
        window.title = "Details Page"
        window.scroll(0, 0)

        if(!this.props.page[this.props.match.params._id]) {
            this.props.fetchPage(`/detail-page/${this.props.match.params._id}`, this.props.match.params._id
            )
        }
    }

    render () {
        const { page, match } = this.props
        // console.log(page[match.params._id])

        if(!page[this.props.match.params._id]) {
            return null
        }

        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ]
        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params._id]} />
                <FeaturedImages data={page[match.params._id]} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <Fade bottom>
                                <PageDetailDescription data={page[match.params._id]} />
                            </Fade>
                        </div>
                        <div className="col-5">
                            <Fade bottom>
                                <BookingForm itemDetails={page[match.params._id]} startBooking={this.props.checkoutBooking} />
                            </Fade>
                        </div>
                    </div>
                </section>
                <PageDetailActivities data={page[match.params._id].activityId} />
                <Testimony data={page[match.params._id].testimonial} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailsPage)