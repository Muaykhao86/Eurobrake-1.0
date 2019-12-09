import React, { Component } from 'react'

export default class GetSnap extends Component {
    state= {
        Snap: null,
    }

    componentDidMount() {
        this.setState({Snap: require('snapsvg')})
    }
    
    Snap = () => {
        return this.state.Snap
    }
    
}
