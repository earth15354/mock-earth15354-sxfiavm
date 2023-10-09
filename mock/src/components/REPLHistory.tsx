import '../styles/main.css';

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    // CHANGED
    history: string[],
    mode: string
}

export function REPLHistory(props : REPLHistoryProps) {

    if (props.mode == "Verbose") {
        return (
            <div className="repl-history">
                {/* This is where command history will go */}
                {/* TODO: To go through all the pushed commands... try the .map() function! */}
                {/* CHANGED */}
                {props.history.map((command, index) => <p>{command}</p>)}
            </div>
        );
    } else {
        return (
            <div className="repl-history">
                {/* Return current output */}
            </div>
        )
    }
}