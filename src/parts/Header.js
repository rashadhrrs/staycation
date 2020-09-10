import React from 'react'
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

    if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

    return (
        <Fade>
        <header>
            <div className="container">
            <i className="fa fa-lg fa-search"></i>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon/>
                <div className="collapse navbar-collapse">
                    
                    <i className="fa fa-search"></i>
                    
                    <ul className="navbar-nav ml-auto">
                    <i className="fa fa-lg fa-search"></i>
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                        <i className="fa fa-lg fa-search"></i>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/github")}`}>
                            <Button className="nav-link" type="link" isExternal href="https://github.com/rashadhrrs">
                                Github
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/linkedin")}`}>
                            <Button className="nav-link" type="link" isExternal href="https://www.linkedin.com/in/rashadhrrs/">
                                LinkedIn
                            </Button>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
        </Fade>
    )
}
