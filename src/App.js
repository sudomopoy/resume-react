import React, { Component } from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import NavBar from "./components/NavBar";
import "./style/App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
            colorSet: 0,
            showWand: true,
            scrollPos: 0,
            scrollBreaked: false
        }
    }

    /** change color  method
     * it store last scroll position before change the colorset*/
    changeColor(scrollPos) {
        this.setState({
            colorSet: this.getRandomColor(),
            scrollBreaked: true,
            scrollPos: scrollPos
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        // jump to last scroll position after color change, to keep position
        if (window.scrollY == 0 && this.state.scrollBreaked) {
            window.scrollTo(0, this.state.scrollPos)
            this.setState({ scrollBreaked: false })
        } // magic wand only works on title section
        else if (window.scrollY <= 300) {
            this.setState({ showWand: true })
        }
        else { this.setState({ showWand: false }) }
    }

    getRandomColor = () => {
        let cs = Math.floor((Math.random() * 4) + 0)
        // making sure to get a different number
        return (cs === this.state.colorSet) ? this.getRandomColor() : cs
    }


    render() {
        return (


            <div className="App">
                <NavBar ColorChangerTrigger={this.changeColor.bind(this)} showWand={this.state.showWand} />
                <TitlesAndIcons colorSet={this.state.colorSet} />
                <AboutSection />
                <SkillSection />
            </div>
        );
    }
}

export default App;
