import React, { Component } from 'react'
import '../style/Fullpage.css'

export default class Fullpage extends Component {
  render() {
    const { children } = this.props
    return (
      <section className={`fullpage ${this.props.className || ''}`} id={this.props.id} style={this.props.style}>
        {children}
      </section>
    )
  }
}
