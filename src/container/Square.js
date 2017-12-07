import React,{Component} from 'react';
import '../App.css';

class Square extends Component{
    render(){
        return (
            <button className="square" style={this.props.style} onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        )
    };
}
export default Square;