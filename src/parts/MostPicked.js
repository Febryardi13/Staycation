import React from 'react'
import Button from 'elements/button'

import Fade from 'react-reveal/Fade';

export default function MostPicked(props) {
    const data = props.data.mostPicked
    return (
        <section className="container" ref={props.refMousePicked}>
            <Fade bottom>
                <h4 className="mb-3">Most Picked</h4>
                <div className="container-grid">
                    {
                        data.map( (val, index)=> {
                            return (
                                <div key={`mostpicked ${index}`} className={`item column-4 ${index === 0 ? " row-2" : " row-1"}`}>
                                    <Fade bottom delay={ 500 * index }>
                                        <div className="card card-featured">
                                            <div className="tag">
                                            ${" "}{val.price}{" "}
                                            <span className="font-weight-light">per{" "}{val.unit}</span>
                                            </div>
                                            <figure className="img-wrapper">
                                                {
                                                    val.imageId ? 
                                                        val.imageId.map((img, index)=> {
                                                            return (
                                                                <img key={index} src={`${process.env.REACT_APP_HOST}/${img.imageUrl}`} alt={val.title} className="img-cover"/>
                                                            )
                                                        })
                                                    :
                                                        ""
                                                }
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button 
                                                    type="link"
                                                    className="stretched-link d-block text-white"
                                                    href={`/properties/${val._id}`}>
                                                    <h5>{val.title}</h5>
                                                </Button>
                                                <span>
                                                    {val.city}, {val.country}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        } )
                    }
                </div>
            </Fade>
        </section>
    )
}
