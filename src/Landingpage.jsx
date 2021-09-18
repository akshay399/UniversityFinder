import React from 'react'
import Headerbar from './Header'
import './Landingpage.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import CardComponent from './Cardcomponent'
import AkshayPic from '../src/Pictures/Akshay.jpeg';
import MeghnaPic from '../src/Pictures/Meghna.jpeg';
import ShreyaPic from '../src/Pictures/Shreya.jpeg';

function Landingpage() {
    return (
        <div>
            <Headerbar />
            <div className="section1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h1 className="titleSection1">UNISEARCH</h1>
                            <h5>One Stop Solution For All Your Dream College Search Problems!</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h2 className="titleSection2">Confused About Which College to Choose?</h2>
                            <h5>Don't Worry We've Got you Covered!</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="container text-center">
                    <h2>Subscribe To Our Newsletter</h2>
                    <InputGroup style={{ height: '50px', marginTop: '40px', width: '820px', marginLeft: '160px' }}>
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
                    <h2 style={{ textAlign: 'center', paddingBottom: '20px' }}>OUR TEAM</h2>
                    <p></p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent
                                image={AkshayPic}
                                name="Akshay Chopade" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent
                                image={MeghnaPic}
                                name="Meghna Nakhate" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <CardComponent
                                image={ShreyaPic}
                                name="Shreya Ayyagari" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;
