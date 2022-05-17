import { Component } from 'react';
import NavigateMethod from './navigateMethod';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user : true, 
        link: "",
      };
      this.handleClick = this.handleClick.bind(this);
    }
     handleClick(params) {
       if (this.state.user) {
        this.setState({ link: "san" })
       } else {
        this.setState({ link: "" })
       }
  
    }
    render() { 
  
      return (
        <>
        
        <button onClick={this.handleClick}>change</button>
       <NavigateMethod link={this.state.link} />
        </>
      );
    }
  }
   
  export default Main; 