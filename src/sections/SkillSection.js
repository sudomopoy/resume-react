import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import data from "../data";
import "../style/SkillSection.css";
import { Element } from 'react-scroll'

export default class SkillSection extends Component {
    render() {
        return (
            <Fullpage className="third">
                <Element name="skillSection" className="element" />
                <h2 className="title">{data.sections[1].title}</h2>
                <div className="card-wrapper">
                    {data.sections[1].items.map(skill => {
                        return (
                            <SkillCard skill={skill} />
                        );
                    })}
                </div>
            </Fullpage>
        );
    }
}
