import React, { Component } from 'react';
import '../style/Fullpage.css';
import bg_pic from './../assets/bg.jpg';

export default class Fullpage extends Component {
  render() {
    const { children, bg = false } = this.props
    return (
      <section className={`fullpage ${this.props.className || ''}`} id={this.props.id} style={this.props.style}>
        {bg && <img className="background-picture" alt='background' src={bg_pic} />}
        {children}
      </section>
    )
  }
}
