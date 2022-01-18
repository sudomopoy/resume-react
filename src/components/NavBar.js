import React, { Component } from 'react';
import data from "../data";
import '../style/NavBar.css'
import { Link } from 'react-scroll'

export default class TitlesAndIcons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wandIcon: data.icons.magicWand
        }


    }

    render() {
        return (
            <nav className="nav-bar">

                <div className="nav-menu">
                    <Link className="nav-link" activeClass="active" to="homeSection" spy={true} smooth={true}
                        duration={500}>
                        Home
                    </Link>
                    <Link className="nav-link" activeClass="active" to="aboutSection" spy={true} smooth={true}
                        duration={500}>
                        About
                    </Link>
                    <Link className="nav-link" activeClass="active" to="skillSection" spy={true} smooth={true}
                        duration={500}>
                        Skills
                    </Link>
                </div>
                <a className="nav-icon" href="#">
                    <img src={this.state.wandIcon}
                        onClick={() => {
                            let scrollPos = window.scrollY
                            this.props.ColorChangerTrigger(scrollPos)
                        }}
                        onMouseEnter={() => {
                            this.setState({
                                wandIcon: data.icons.magicWandHover
                            })
                        }}
                        onMouseLeave={() => {
                            this.setState({
                                wandIcon: data.icons.magicWand
                            })
                        }}
                        height={25}
                        style={{
                            display: `${this.props.showWand ? "" : "none"}`
                        }} />
                </a>
            </nav>
        )
    }
}
