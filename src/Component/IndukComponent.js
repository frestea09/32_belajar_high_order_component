import React from 'react'

function IndukComponent(OriginalComponent){
    class NewComponent extends React.Component{
        constructor(){
            super()
            this.state = {
                count : 0,
            }
            this.setCount = this.setCount.bind(this)
        }
        setCount(){
            this.setState(
                {
                    count : this.state.count + 1
                }
            )
        }
        render(){
            return(
                <OriginalComponent name={'ilman'} count={this.state.count} setCount={this.setCount}/>              
            )
        }
    }
    return NewComponent
}
export default IndukComponent