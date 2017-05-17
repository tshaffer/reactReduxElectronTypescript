import * as React from "react";
import {Action} from 'redux';

export interface Props {
    name: string;
    enthusiasmLevel: number;
    onIncrement: () => Action;
    onDecrement: () => Action;
}

class Hello extends React.Component<Props, object> {

    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div>
                <div>
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>

        );
    }
}

// function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//     if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//     }
//
//     return (
//         <div>
//             <div>
//                 Hello {name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//             <div>
//                 <button onClick={onDecrement}>-</button>
//                 <button onClick={onIncrement}>+</button>
//             </div>
//         </div>
//     );
// }

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
