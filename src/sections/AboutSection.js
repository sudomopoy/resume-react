import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data";
import '../style/AboutSection.css'
import DownArrow from "../components/DownArrow";
import { Link, Element } from 'react-scroll'

export default class TitlesAndIcons extends Component {
    render() {
        return [
            <Element name="aboutSection" className="element" />,
            <Fullpage className="second">

                <div className="page-body">
                    <h2 className="title">{data.sections[0].title}</h2>
                    <hr />
                    {
                        data.sections[0].items.map((obj) => {
                            return (<p className="content">{obj.content}</p>)
                        })
                    }
                </div>
                <Link activeClass="active" to="skillSection" spy={true} smooth={true} duration={500}>
                    <DownArrow icon={data.icons.down} isInvert={true} />
                </Link>
            </Fullpage>
        ]
    }
}
