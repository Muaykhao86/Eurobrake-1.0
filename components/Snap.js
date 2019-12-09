import React from 'react'

export default class Snap extends React.Component {
constructor(props) {
    super(props);
    this.state ={
       Snap: null

    }
}

    componentDidMount() {
        this.setState({Snap: require('snapsvg')})
    }
    
   render(){
      const {svgProp} = props;
        const StateSnap = (svgProp) => this.state.Snap({svgProp});
       return new StateSnap(svgProp)
   }
   
    
}
