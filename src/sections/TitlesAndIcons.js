import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import DownArrow from "../components/DownArrow";
import data from "../data";
import { SocialIcon } from "react-social-icons";
import '../style/TitlesAndIcons.css'
import { Element, Link } from "react-scroll/modules";
import SnowStorm from "react-snowstorm";

export default class TitlesAndIcons extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState) {
        //changing snowStorm color by style, because it set props in its constructor
        if (prevProps.colorSet != this.props.colorSet) {
            let elements = document.getElementsByClassName("___snowStorm___");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.color = data.colorSets[this.props.colorSet].snowColor
            }
        }
    }
    render() {
        return [
            <Element name="homeSection" className="element" />,
            <Fullpage bg={true} className="first" id="snow-target"
                style={{
                    backgroundColor: `${data.colorSets[this.props.colorSet].bgColor}`
                }}>
                <SnowStorm
                    freezeOnBlur={false}
                    useTwinkleEffect={false}
                    vMaxX={5}
                    vMaxY={10}
                    followMouse={false}
                    snowStick={false}
                    snowColor="rgba(255,255,255,0.5)"
                    targetElement="snow-target"

                />
                <div className="page-body">
                    <h1 className="title" style={{ color: `${data.colorSets[this.props.colorSet].titleColor}` }}>
                        {data.title}
                    </h1>
                    <h3 className="lead" style={{ color: `${data.colorSets[this.props.colorSet].subTitleColor}` }}>
                        {data.subtitle}
                    </h3>
                    <div className="social-icon-container">
                        {
                            Object.keys(data.links).map(k => {
                                return (
                                    <SocialIcon key={k} url={data.links[k]} bgColor={data.colorSets[this.props.colorSet].iconColor} />
                                )
                            }
                            )
                        }
                    </div>
                </div>
                <Link activeClass="active" to="aboutSection" spy={true} smooth={true} duration={500}>
                    <DownArrow icon={data.icons.down} />
                </Link>
            </Fullpage>
        ];
    }
}
