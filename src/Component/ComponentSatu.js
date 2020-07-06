import React from 'react'
import IndukComponenet from './IndukComponent'
class ComponentSatu extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <button onClick={this.props.setCount}>{this.props.count} Tambah</button>
            </div>
        )
    }
}
export default IndukComponenet(ComponentSatu)
