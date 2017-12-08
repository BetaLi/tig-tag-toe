import React,{Component} from 'react';
import Board, {calculateWinner} from "./Board";
import '../App.css';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            history:[{
                squares:new Array(9).fill(null),
                styleObj:new Array(9).fill({color:'black'}),
            }],
            stepNumber:0,
            xIsNext:true,
        }
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        console.log(winner);

        if (winner) {
            let newStyle = current.styleObj;
            if(winner){
                winner.grid.map((item) => {
                    newStyle[item] = {color: 'red'};
                });
                this.setState({styleObj: newStyle});
            }
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                styleObj:{
                    color:'black',
                }
            }]),
            stepNumber: history.length,
            xIsNext:!this.state.xIsNext,
        });


    }
    jumpTo(move) {
        this.setState({
            stepNumber: move,
            xIsNext: (move % 2) === 0,
        });
    }
    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        console.log(winner);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;

        if (winner) {
            status = 'Winner: ' + winner.winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
                <div className="game">
                    <div className="game-board">
                        <Board
                            style={current.styleObj}
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            )
    }
}
export default Game;