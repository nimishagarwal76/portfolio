import React from 'react';
import { Grid } from 'semantic-ui-react';
import highlightAboutMePNG from './me.png';
import Projects from './Projects';
import Articles from './Articles';

const View = props => {
  const startYear = 2018;
  const date = new Date();
  const currentYear = date.getFullYear();

  const { id } = props;

  return (
    <div className="tile highlights full-width">
      <div className="highlight">
        <div className="highlight-header">
          <h2>About Me</h2>
        </div>
        <div className="highlight-body">
          <div className="intro">
            <p>I am a fourth year student pursuing Computer Science and Engineering from <a href="https://www.nitt.edu/">NIT Trichy</a>.</p>
            <p>I enjoy solving Algorithmic problems and love to automate / hack a lot of tasks in my day-to-day life.</p>
            <p>I have been involved in software development for past {currentYear - startYear} years.</p>
            <img src={highlightAboutMePNG} alt="" className="ui small bordered rounded floated image" />
            <p><b>Programming Languages</b><br />Javascript, C++, Python, Golang</p>
            <p><b>Web Development</b><br />NodeJS, React, Redux, HTML, CSS</p>
            <p><b>Tools</b><br />Linux, Git, Docker</p>
          </div>

        </div>
      </div>
      <div className="highlight">
        <div className="highlight-header">
          <h2>Projects</h2>
        </div>
        <div className="highlight-body">
          <Projects id={id} />
        </div>
      </div>
      <div className="highlight">
        <div className="highlight-header">
          <h2>Recent Articles</h2>
        </div>
        <div className="highlight-body">
          <Articles id={id+1} />
        </div>
      </div>

    </div>
  );
};

export default View;