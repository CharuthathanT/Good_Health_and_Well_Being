import React from 'react';
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
    {/* part1 */}
    <div id='bgim1' className='d-flex flex-column justify-content-center'>
        <div className='d-flex flex-column justify-content-center w-25'>
            <h1 className='m-2'>We're here for you</h1>
            <span className='m-2'>Your mental health is important. Some days are better than others and we all need a helping hand from time to time.</span>
            <span className='m-2'>Wherever you are in your mental health journey, we'll be here to help.</span>
            <button className='btn border rounded btn-primary m-2'>Find mental health journey</button>
        </div>
    </div>
    {/* part2 */}
    <div id='fix'>
        <div className='row m-5'>
            <div className='col-lg-6'>
                <h1 style={{color:"white"}}>How can we support you?</h1>
            </div>
            <div className='col-lg-6'>
                <div className='d-flex flex-column justify-content-center'>
                    <button className='btn border rounded btn-primary m-2'><span style={{float:"left",width:"300px",height:"30px"}}>I want to check my mental health</span><span style={{float:"right"}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
                    <button className='btn border rounded btn-primary m-2'><span style={{float:"left",width:"300px",height:"30px"}}>I want to find a mental health professional</span><span style={{float:"right"}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
                    <button className='btn border rounded btn-primary m-2'><span style={{float:"left",width:"300px",height:"30px"}}>I want to learn about mental health</span><span style={{float:"right"}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
                </div>
            </div>
        </div>
    </div>
    {/* part3 */}
    <div>
        <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-center'>
                <div className='d-flex flex-column justify-content-center'>
                    <h1 className='m-2'>We're here for you</h1>
                    <span className='m-2'>Your mental health is important. Some days are better than others and we all need a helping hand from time to time.</span>
                    <span className='m-2'>Wherever you are in your mental health journey, we'll be here to help.</span>
                    <button className='btn border rounded btn-primary m-2'>Find mental health journey</button>
                </div>
            </div>
            <div className='col-lg-6 text-center'>
                <img src='https://images.pexels.com/photos/3951878/pexels-photo-3951878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"500px",width:"75%"}}/>
            </div>
        </div>
    </div>
    {/* last */}
    <div>
    <div className="container-fluid border">
        <div className="row">
            <div className="col-lg-3 division col-sm-12 p-3">
                <div className="d-flex flex-row">
                    <div>
                        <img id='fimg' className="img-fluid" src="https://cdn.pixabay.com/photo/2014/04/02/10/55/health-304919_1280.png" alt="me"/>
                    </div>
                    <div className="ps-2">
                        <h1 id='h'>charuthathan</h1>
                        <span style={{color:"black"}}>Helping Monitoring</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 division col-sm-12 p-3">
                <h1 id='h'>Phone No</h1>
                <span style={{color:"black"}}>6380916465</span>
            </div>
            <div className="col-lg-3 division col-sm-12 p-3">
                <h1 id='h'>E-mail</h1>
                <span style={{color:"black"}}>charuthathancharu@gmail.com</span>
            </div>
            <div className="col-lg-3 division col-sm-12 p-3">
                <h1 id='h'>Address</h1>
                <span style={{color:"black"}}>17 Ayur Vigyan, Nagar,New Delhi,India.</span>
            </div>
            <div className="col-12 cpy text-lg-center text-sm-start p-3">
                <span style={{color:"black"}}>&copy;2024 by charuthathan T. Created with KGiSL</span>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
