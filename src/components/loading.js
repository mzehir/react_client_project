import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div id="overlayloader">
                <div id="progstatloader"></div>
                <div id="progressloader"></div>
            </div>
        )
    }
}
