import React, { Component } from 'react'
import '../style/SkillCard.css'

export default class SkillCard extends Component {
    render() {
        const { skill } = this.props
        return (
            <div className="card"
                style={{ "background-color": `${skill.content.color}` }}>
                <div className="image-wrapper">
                    <img src={skill.content.image} width="150px" height="150px" />
                </div>

                <div className="skill-title-wrapper">
                    <h4>{skill.content.title}</h4>
                </div>
                {/*<div*/}
                {/*className="skill-level"*/}
                {/*style={*/}
                {/*{*/}
                {/*width:`${skill.content.level*10}%`,*/}
                {/*"background-color": `${skill.content.color}`,*/}
                {/*height: "20px",*/}
                {/*"align-self" : "flex-start"*/}
                {/*}*/}
                {/*}/>*/}

            </div>
        )
    }
}
