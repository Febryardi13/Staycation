import React from 'react'

import Button from 'elements/button'
import IconText from './IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width:350 }}>
                        <IconText/>
                        <p className="brand-tag-line">
                            We kaboom your beauty holiday instanly and memorable
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-6">For Beginner</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/user-payment">
                                    User Payments
                                </Button>
                            </li>

                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-6">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-6">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="mailto:support@staycation.com">
                                    support@staycation.com
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="tel:+622199761991">
                                    021 - 9976 - 1991
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>
                                    Staycation, Kemang, Jakarta
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                    Copyright 2020 - All rights reserved - Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
