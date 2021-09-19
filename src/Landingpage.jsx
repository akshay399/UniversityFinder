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
                                <h3 style={{ fontWeight: '600' }}>Confused On which College To Choose?</h3>
                                <p className="pt-4">
                                    <span style={{ fontWeight: '600' }}>DO NOT WORRY!</span> We have brought to you <span style={{ fontWeight: '600' }}>UniSearch!</span> An all in one solution to all the
                                    problems faced by students when trying to search for the right college to attend.Everyone is aware of the tremendous efforts a student has to make to search for colleges from a particular country, especially when
                                    they have absolutely <span style={{ fontWeight: '600' }}>NO</span> idea about that country or the colleges of that country.
                                </p>
                                <p>
                                    UniSearch helps students in choosing the right colleges based on
                                    their country preferences. All a student has to do is fill up a form and write all the
                                    details mentioned and based on the preferences chosen, the college images will be displayed
                                    in a <span style={{ fontWeight: '600' }}>"Swipe"</span> manner.If the student likes a college, the student can click on the image and
                                    it will redirect the student to the official website of that particular college.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="container text-center">
                    <h2 style={{ fontWeight: '600' }}>Subscribe To Our Newsletter</h2>
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
                        <InputGroup.Text style={{ fontWeight: '600' }} id="basic-addon2">Subscribe</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
            <div className="section4">
                <div className="container">
                    <h2 style={{ textAlign: "center", paddingBottom: "20px", fontWeight: '700' }}>
                        OUR TEAM
                    </h2>
                    <p></p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent image={AkshayPic} name="Akshay Chopade"
                                about="Hello! I am a B.E,IT final year student from Maharastra, India." />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent image={MeghnaPic} name="Meghna Nakhate"
                                about="Hey! I am a B.E,IT pre-final year student from Maharastra, India." />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent image={ShreyaPic} name="Shreya Ayyagari"
                                about="Hie! I am B.E,CSE final year student from Tamil Nadu, India." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section5Footer">
                <p className="pt-4 text-muted text-center">UNISEARCH © 2021 Copyrights belongs to Akshay,Meghna and Shreya </p>
            </div>
        </div>
    );
}

export default Landingpage;
