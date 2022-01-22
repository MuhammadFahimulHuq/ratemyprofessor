import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/Section/FacultyCard'

export default class Home extends Component {

    render() {
        return (
            <div>
                <header>
                    <Navbar/>
                    <Card />
                </header>
            </div>
        )
    }
}
