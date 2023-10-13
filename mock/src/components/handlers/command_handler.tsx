//import "../styles/main.css";
import { ViewTable } from "./view_table";

/**
 * CommandHandlerProps
 * @param currentCommand State of current command (view, search, load_file)
 * @param loadedFile State of loaded file
 * @param currentMessage State of current message
 */
interface CommandHandlerProps {
  currentCommand: string;
  loadedFile: Array<Array<string>>;
  currentMessage: string;
}

/**
 *
 * @param props CommandHandlerProps
 * @returns div containing the output of the command
 */
export function CommandHandler(props: CommandHandlerProps) {
  // Load file command
  if (props.currentCommand == "load_file") {
    return (
      <div className="command-handler">
        {/* Status of request */}
        <p> Load: </p>
        <p> {props.currentMessage} </p>
      </div>
    );

    // View command
  } else if (props.currentCommand == "view") {
    // return the table view
    return (
      <div className="command-handler">
        <p> View</p>
        <ViewTable data={props.loadedFile} />
      </div>
    );
    // Search command
  } else if (props.currentCommand == "search") {
    return (
      <div className="command-handler">
        <p> {props.currentMessage} </p>
      </div>
    );
    // Invalid command
  } else if (props.currentCommand == "invalid") {
    return (
      <div className="command-handler">
        <p> Invalid Command </p>
      </div>
    );
    // No command
  } else if (props.currentCommand == "") {
    return (
      <div className="command-handler">
        <p> {props.currentMessage}</p>
      </div>
    );
  }
}
