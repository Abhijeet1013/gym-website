import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "react-bootstrap/Carousel";
import protein_foods from "../Images/protein_foods.jpg";
import sleep_well from "../Images/sleep_well.jpg";
import stay_consistent from "../Images/stay_consistent.jpg";
import stay_hydrated from "../Images/stay_hydrated.jpg";
import warm_up from "../Images/warm_up.jpg";


const FitnessTips = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-5">Fitness Tips for a Healthy Lifestyle</h1>
                <h2 className="text-center mb-5 fw-bold">
                    Follow these expert tips to improve your health and fitness!
                </h2>
                <div className="col-md-8 offset-md-2">
                    <Carousel className="text-center">
                        <Carousel.Item>
                            <img
                                src={protein_foods}
                                className="d-block w-100 rounded shadow-lg"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Eat protein-rich foods"
                            />
                            <Carousel.Caption>
                                <h5>Eat Protein-Rich Foods</h5>
                                <p>Boost muscle growth and recovery with high-protein meals.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={sleep_well}
                                className="d-block w-100 rounded shadow-lg"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Get quality sleep"
                            />
                            <Carousel.Caption>
                                <h5>Get Enough Sleep</h5>
                                <p>Rest is crucial for muscle recovery and overall well-being.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={stay_consistent}
                                className="d-block w-100 rounded shadow-lg"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Stay consistent with workouts"
                            />
                            <Carousel.Caption>
                                <h5>Stay Consistent</h5>
                                <p>Regular workouts lead to lasting results.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={stay_hydrated}
                                className="d-block w-100 rounded shadow-lg"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Drink enough water"
                            />
                            <Carousel.Caption>
                                <h5>Stay Hydrated</h5>
                                <p>Water helps maintain energy and performance.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src={warm_up}
                                className="d-block w-100 rounded shadow-lg"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                alt="Warm up before exercise"
                            />
                            <Carousel.Caption>
                                <h5>Warm Up Properly</h5>
                                <p>Reduce injury risk with a good warm-up routine.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default FitnessTips;
