import React from 'react'

import ImgHero from 'assets/images/img-hero.jpg'
import ImgFrameHero from 'assets/images/img-hero-frame.jpg'
import IconTravelers from 'assets/images/icon/icon_travellers.svg'
import IconTreasure from 'assets/images/icon/icon_treasure.svg'
import IconCities from 'assets/images/icon/icon_cities.svg'

import Button from 'elements/button'
import Fade from 'react-reveal/Fade';
import numberFormat from 'utilisasi/formatNumber'

export default function Hero(props) {
    const data = props.data.hero
    function showMostPicked () {
        window.scrollTo({
            top: props.refMousePicked.current.offsetTop - 30,
            behavior:"smooth"
        })
    }

    return (
        <Fade bottom>
            <section className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br/> Start  Next Vacation 
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:'170%'}}>
                            We provide what you needed to enjoy your holiday with family. Time to made another memoriable momments.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                        </Button>

                        <div className="row"  style={{marginTop:80}}>
                            <div className="col-auto" style={{marginRight:'20px'}}>
                                <img height="32px" width="32px" src={IconTravelers} alt={`${data.travellers} Travelers`} />
                                <h6 className="mt-3">
                                    {numberFormat(data.travellers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        travellers
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{marginRight:'20px'}}>
                                <img height="32px" width="32px" src={IconTreasure} alt={`${data.treasurers} Treasures`} />
                                <h6 className="mt-3">
                                    {numberFormat(data.treasurers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img height="32px" width="32px" src={IconCities} alt={`${data.cities} Cities`} />
                                <h6 className="mt-3">
                                    {numberFormat(data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pr-4">
                        <div style={{Width:360, height:410}}>
                            <img 
                                src={ImgHero} 
                                alt="Room with couches" 
                                className="img-fluid position-absolute"
                                style={{ margin:'-30px 0 0 -30px', zIndex: 1 }}
                            />
                            <img 
                                src={ImgFrameHero} 
                                alt="Room with couches frame" 
                                className="img-fluid position-absolute"
                                style={{ margin:'0 -15px -15px 0' }}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </Fade>
    )
}
