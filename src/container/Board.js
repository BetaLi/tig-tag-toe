import React,{Component} from 'react';
import Square from './Square';
import '../App.css';

class Board extends Component {
    renderSquare(i){
        return <Square style={this.props.style[i]} value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>
    }
    render(){
            const row = [0,3,6];
            const squares = row.map((item,step)=>{
                return (
                    <div className="board-row" key={step}>
                        {this.renderSquare(item)}
                        {this.renderSquare(item+1)}
                        {this.renderSquare(item+2)}
                    </div>
                )
            });
        return (
            <div>
                {squares}
            </div>
        )

    }
}
export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {winner:squares[a],grid:[a,b,c]};
        }
    }
    return null;
}

export default Board;