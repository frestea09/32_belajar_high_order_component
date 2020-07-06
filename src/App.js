import React from 'react'
import ComponentSatu from './Component/ComponentSatu'
import ComponentDua from './Component/ComponentDua'
class App extends React.Component{
  render(){
    return(
      <div>
        <ComponentSatu/>
        <ComponentDua/>
      </div>
    )
  }
}
export default App