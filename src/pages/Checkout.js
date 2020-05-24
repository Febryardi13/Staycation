import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux'

import Header from 'parts/Header'
import Button from 'elements/button'
import Stepper, {
    Numbering,
    Meta,
    Controller,
    MainContent
} from 'elements/stepper'

import Bookinginformation from 'parts/checkout/Bookinginformation'
import Payment from 'parts/checkout/Payment'
import Completed from 'parts/checkout/Completed';

import ItemDetails from 'json/itemDetails.json'

class Checkout extends Component {

    state = {
        data : {
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            proofPayment:"",
            bankName:"",
            bankHolder:""
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    render () {
        const { data } = this.state;
        const { checkout } = this.props

        if(!checkout) {
            return <div className="container">
                <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
                    <div className="col-4">
                        <h5>Please choose property first</h5>
                        <Button className="btn mt-2" type="link" href="/">
                            Back to home
                        </Button>
                    </div>
                </div>
            </div>
        }

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank fileds below",
                content: (
                    <Bookinginformation 
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                ),
            },

            payment: {
                title: "Payment",
                description: "Kindly follow the instruction bellow",
                content: (
                    <Payment 
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                ),
            },
            completed: {
                title: "Yay ! Completed",
                description: null,
                content: (
                    <Completed />
                ),
            }

        }

        return (
            <>
             <Header isCentered />   
             <Stepper steps={steps}>
                {
                    (prevStep, nextStep, currentStep, steps) => (
                        <>
                            <Numbering
                                data={steps}
                                current={currentStep}
                                style={{ marginBottom: 50 }}
                            />
                            <Meta
                                data={steps}
                                current={currentStep}
                            />
                            <MainContent data={steps} current={currentStep} />
                            {currentStep === "bookingInformation" && (
                                <Controller>
                                    {
                                        data.firstName !== "" &&
                                        data.lastName !== "" &&
                                        data.email !== "" &&
                                        data.phone !== "" && (
                                            <Fade>
                                                <Button
                                                    className="btn mb-3"
                                                    type="button"
                                                    isBlock
                                                    isPrimary
                                                    hasShadow
                                                    onClick={nextStep}
                                                >
                                                    Continue Book
                                                </Button>
                                            </Fade>
                                        )}
                                        <Button
                                            className="btn"
                                            type="link"
                                            isBlock
                                            isLight
                                            href={`/properties/${ItemDetails._id}`}
                                        >
                                            Cancel
                                        </Button>
                                </Controller>
                            )}

                            {
                                currentStep === "payment" && (
                                    <Controller>
                                        {
                                            data.proofPayment !== "" &&
                                            data.bankName !== "" && 
                                            data.bankHolder !== "" && (
                                                <Fade>
                                                    <Button
                                                        className="btn mb-3"
                                                        type="button"
                                                        isBlock
                                                        isPrimary
                                                        hasShadow
                                                        onClick={nextStep}
                                                    >
                                                        Continue to Book
                                                    </Button>
                                                </Fade>
                                            )}
                                            <Button
                                                className="btn"
                                                type="button"
                                                isBlock
                                                isLight
                                                onClick={prevStep}
                                            >
                                                Cancel
                                            </Button>
                                    </Controller>
                                )}

                                {currentStep === "completed" && (
                                    <Controller>
                                        <Button
                                            className="btn"
                                            type="link"
                                            isBlock
                                            isPrimary
                                            hasShadow
                                            href=""
                                        >
                                            Back to Home
                                        </Button>
                                    </Controller>
                                )}
                        </>
                    )
                }
             </Stepper>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    checkout: state.checkout
})

export default connect(mapStateToProps)(Checkout)
