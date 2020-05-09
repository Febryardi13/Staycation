import React from 'react'
import Button from 'elements/button'

export default function MostPicked(props) {
    return (
        <section className="container" ref={props.refMousePicked}>
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                {
                    props.data.map( (val, index)=> {
                        return (
                            <div key={`mostpicked ${index}`} className={`item column-4 ${index === 0 ? " row-2" : " row-1"}`}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        ${val.price}
                                        <span className="font-weight-light">per {val.unit}</span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img src={val.imageUrl} alt={val.name} className="img-cover"/>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button 
                                            type="link"
                                            className="streched-link d-block text-white"
                                            href={`/properties/${val.id}`}>
                                            <h5>{val.name}</h5>
                                        </Button>
                                        <span>
                                            {val.city}, {val.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </section>
    )
}
