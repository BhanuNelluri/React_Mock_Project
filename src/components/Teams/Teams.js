import React from 'react';
import './Teams.css';

export default function Teams() {
    return (
        <div className="projectContainer">
            <div className="projectNav">
                <h3 className="projectH">Teams</h3>
            </div>
            <div className="projectsModule">
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">Frontend Team</div>
                        <div className="matter">
                            <div className="matterContent">A front-end developer is typically only one player on a team that designs and develops web sites, web applications, or native applications running from web technologies.</div>
                            <h4 className="stackH">Tech Stack</h4>
                            <ul className="techlist">
                                <li>React</li>
                                <li>Redux</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projectFooter">
                    <a href="/frontend" className="visit">OPEN</a>
                </div>
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">Backend Team</div>
                        <div className="matter">
                            <div className="matterContent">Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you don't see.</div>
                            <h4 className="stackH">Tech Stack</h4>
                            <ul className="techlist">
                                <li>Spring</li>
                                <li>Spring-Boot</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>MySql</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projectFooter">
                    <a href="/backend" className="visit">OPEN</a>
                </div>
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">Devops Team</div>
                        <div className="matter">
                            <div className="matterContent">DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes.</div>
                            <h4 className="stackH">Tech Stack</h4>
                            <ul className="techlist">
                                <li>Git</li>
                                <li>Maven</li>
                                <li>Jenkins</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projectFooter1">
                    <a href="/devops" className="visit">OPEN</a>
                </div>

            </div>
        </div>
    )
}
