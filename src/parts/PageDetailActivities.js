import React from 'react'
import Button from 'elements/button'

import Fade from "react-reveal";

export default function PageDetailActivities({ data }) {
    return (
        <section className="container">
            <h4 className="mb-3 font-weight-medium">
                Things to do
            </h4>
            <div className="container-grid">
                {
                    data.length === 0 ? (
                        <div className="row">
                            <div className="col-auto align-items-center">
                                There is no property at this activity
                            </div>
                        </div>
                    ) : (
                        data.map(( item, index )=>{
                            return (
                                <div className="item column-3 row-1"
                                    key={`activity-${index}`}
                                >
                                    <Fade bottom delay={ 300 * index }>
                                        <div className="card">
                                            {item.isPopular && (
                                                <div className="tag">
                                                    Popular{" "}
                                                    <span className="font-weight-light">Choice</span>
                                                </div>
                                            )}
                                            <figure style={{ height:180 }}>
                                                <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button 
                                                    type="link" 
                                                    href={`/properties/${item._id}`} 
                                                    className="stretched-link d-block text-gray-800">
                                                    <h5 className="h4">{item.name}</h5>
                                                </Button>
                                                <span className="text-gray-500">
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        })
                    )}
            </div>
        </section>
    )
}
