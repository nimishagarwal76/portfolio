import React from 'react';
import linkedinPNG from './icons/linkedin.png';
import githubPNG from './icons/github.png';
import gmailPNG from './icons/gmail.png';
import codeforcesPNG from './icons/codeforces.png';
import { Link } from 'react-router-dom';


const View = props => {
    return (
        <div className="tile view mainintro full-width"
            style={{
                background: 'black',
            }}>
            <div>
                <h1 className="heading">I am Nimish Agrawal.</h1>
                <h1 className="heading"> I am a Student and a Developer.</h1>
                <h1 className="heading"> I like to code.</h1>
            </div>
            <div className="contact">
                <a href="https://www.linkedin.com/in/nimish-agrawal-23279a148/" target="_blank"><span><img className="icon" src={linkedinPNG} /></span></a>
                <a href="https://github.com/nimishagarwal76" target="_blank"><span><img className="icon" src={githubPNG} /></span></a>
                <a href="mailto:nimishagarwal76@gmail.com" target="_blank"><span><img className="icon" src={gmailPNG} /></span></a>
                <a href="https://codeforces.com/profile/nimishagarwal76" target="_blank"><span><img className="icon" src={codeforcesPNG} /></span></a >
            </div >
            <a href="https://drive.google.com/file/d/1CFJKBCX-qo1uw6pGXR5p4-ybqszi0MiU/view?usp=sharing" target="_blank"><div className="resume">Resume</div></a>
        </div >
    );
};

export default View;