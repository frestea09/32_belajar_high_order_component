import React from 'react'
import IndukComponent from './IndukComponent'

class ComponentDua extends React.Component{
    render(){
        return(
            <div>
                <p onMouseOver={this.props.setCount}>{this.props.count}Tambah</p>
            </div>
        )
    }
}
export default IndukComponent(ComponentDua)