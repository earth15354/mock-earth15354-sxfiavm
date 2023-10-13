import "../styles/main.css";
import { REPLHistory } from "./REPLHistory";
import { CommandHandler } from "./handlers/command_handler";

/**
 * Mode Props
 * @param mode State of mode (Brief or Verbose)
 * @param history State of history
 * @param current State of current command
 * @param file State of loaded file
 */
interface ModeProps {
  mode: string;
  history: (string | string[][])[];
  current: string;
  file: Array<Array<string>>;
  message: string;
}

/**
 *
 * @param props ModeProps
 * @returns Mode component (either history or current output)
 */
export function Mode(props: ModeProps) {
  if (props.mode == "Verbose") {
    return (
      // Return history
      <div className="mode">
        <div> History: </div>
        <REPLHistory history={props.history} />
      </div>
    );
  } else {
    return (
      // Return current output
      <div className="mode">
        <CommandHandler
          currentCommand={props.current}
          loadedFile={props.file}
          currentMessage={props.message}
        />
      </div>
    );
  }
}
