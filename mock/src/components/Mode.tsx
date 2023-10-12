import '../styles/main.css';
import { REPLHistory } from './REPLHistory';

interface ModeProps{
    mode: string,
    history: string[]
}


export function Mode(props : ModeProps) {

    if (props.mode == "Verbose") {
        return (
            <div className="mode">
                <REPLHistory history ={props.history} mode={props.mode}/>
            </div>
            
        )
    } else {
        return (
            <div className="mode">
                {/* Return current output */}
            </div>
        )
    }
}
