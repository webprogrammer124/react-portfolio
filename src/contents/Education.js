import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title=" Software Engineering" where="VIRTUAL University" from="July 2020" to="Present"/>
            <Widecard title="SSc | HSC" where="GOVT GIRLS DEGREEE COLLEGE" from="2018" to="2019"/>
            </div>
            )
        }
    }
    
export default Education
    