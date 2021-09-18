import React from "react";
import Headerbar from "./Header";

import "./Landingpage.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import CardComponent from "./Cardcomponent";
import AkshayPic from "../src/Pictures/Akshay.jpeg";
import MeghnaPic from "../src/Pictures/Meghna2.jpeg";
import ShreyaPic from "../src/Pictures/Shreya.jpeg";

function Landingpage() {
    return (
        <div>
            <div className="section0">
                <Headerbar />
                <div className="section1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <h1 className="titleSection1">UNISEARCH</h1>
                                <h5>
                                    One Stop Solution For All Your Dream College Search Problems!
                                </h5>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="imageForOverlap">
                                <img src="https://www.personneltoday.com/wp-content/uploads/sites/8/2016/11/COnfused-student.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="panel text-left">
                                <h2>Confused On which College To Choose?</h2>
                                <p className="pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="container text-center">
                    <h2>Subscribe To Our Newsletter</h2>
                    <InputGroup
                        style={{
                            height: "50px",
                            marginTop: "40px",
                            width: "820px",
                            marginLeft: "160px",
                        }}
                    >
                        <FormControl
                            placeholder="Email Id"
                            aria-label="Recipient's Email Id"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
            <div className="section4">
                <div className="container">
                    <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
                        OUR TEAM
                    </h2>
                    <p></p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent image={AkshayPic} name="Akshay Chopade"
                                about="Hello! I am a final year student from Maharastra, India." />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent image={MeghnaPic} name="Meghna Nakhate"
                                about="Hey! I am a pre-final year student from Maharastra, India." />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent image={ShreyaPic} name="Shreya Ayyagari"
                                about="Hie! I am final year student from Tamil Nadu, India." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;
