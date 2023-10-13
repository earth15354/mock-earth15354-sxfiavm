import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import mock_hashmap from "./mockedJson";
// import { ViewTable } from "./handlers/view_table";
import { Load } from "./handlers/load_handle";
import { Search } from "./handlers/search_handle";

/**
 * REPLInputProps
 * @param history State of history
 * @param setHistory Function to set history
 * @param mode State of mode (Brief or Verbose)
 * @param setMode Function to set mode
 * @param currentCommand State of current command (view, search, load_file)
 * @param setCurrentCommand Function to set current command
 * @param loadedFile State of loaded file
 * @param setLoadedFile Function to set loaded file
 * @param currentMessage State of current message
 * @param setCurrentMessage Function to set current message
 */
interface REPLInputProps {
  history: string[][][];
  setHistory: Dispatch<SetStateAction<string[][][]>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  currentCommand: string;
  setCurrentCommand: Dispatch<SetStateAction<string>>;
  loadedFile: Array<Array<string>>;
  setLoadedFile: Dispatch<SetStateAction<Array<Array<string>>>>;
  currentMessage: string;
  setCurrentMessage: Dispatch<SetStateAction<string>>;
}

/**
 *
 * @param props REPLInputProps
 *
 * @returns div containing the input field, submit button, and mode button
 */
export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");

  // This function is triggered when the button is clicked.
  function handleSubmit(commandString: string) {
    // 1. Parse the command string to obtain the command and the arguments
    // 2. Check what command is given
    // 3. In an if-else statement, call component for that command
    // 4. Set the history to the history + command string

    let into_history = "Command: \n";

    // Check if empty input
    if (commandString.length < 1) {
      into_history += "Output: No command provided";
      props.setCurrentMessage("No command provided");
      props.setCurrentCommand("");
    } else {
      const words = commandString.split(" ");
      into_history = "Command: " + words[0] + "\n";
      // Case where given "view"
      if (words[0] == "view") {
        props.setCurrentCommand("view");

        into_history += "Output: ";
        if (props.loadedFile) {
          // TODO: how to store table format?
          // Will output loadedFile in table format
          into_history += props.loadedFile;
        } else {
          props.setCurrentMessage("No data loaded to display.");
          into_history += "No data loaded to display.";
        }
      // Case where given "search"
      } else if (words[0] == "search") {
        props.setCurrentCommand("search");
        if (words.length < 3) {
          let message =
            "Invalid search command. Please enter in the format: search <column> <value>";
          props.setCurrentMessage(message);
          into_history += "Output: " + message + "\n";
        } else {
          if (props.loadedFile) {
            const search_result = Search(words[1], words[2], props.loadedFile);
            into_history += "Output: " + search_result + "\n";
            props.setCurrentMessage(search_result);
          } else {
            let message = "No data loaded to search.";
            props.setCurrentMessage(message);
            into_history += message;
          }
        }
      // Case where given "load"
      } else if (words[0] == "load_file") {
        // Get filepath from command string
        if (words.length < 2) {
          let message = "No filepath provided";
          props.setCurrentMessage(message);
          into_history += "Output: " + message + "\n";
        } else {
          const filepath = words[1];
          // Get file matching that filepath from mocked data (load the file)
          // Note: this will change once we are actually loading files
          const file_content = Load(filepath);
          if (file_content == null) {
            let message = "File at " + filepath + " not found";
            props.setCurrentMessage(message);
            into_history += "Output: " + message + "\n";
          } else {
            props.setLoadedFile(file_content);
            let message = "Successfully loaded file at " + filepath;
            props.setCurrentMessage(message);
            into_history += "Output: " + message + "\n";
          }
        }
        props.setCurrentCommand("load_file");
      } else {
        // Invalid Command
        props.setCurrentCommand("invalid");
        props.setCurrentMessage("invalid command");
        into_history += "Output: " + "invalid command" + "\n";
      }
    }
    props.setHistory([...props.history, [[into_history]]]);
    setCommandString("");
  }

  /**
   * Function takes current State for mode and changes it to the opposite.
   *
   * @param mode current State for mode
   */
  function changeMode(mode: string) {
    if (mode == "Brief") {
      props.setMode("Verbose");
    } else {
      props.setMode("Brief");
    }
  }

  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  return (
    <div className="repl-input">
      {/* Getting User Input from Command Line */}
      <fieldset>
        <legend>Command Line:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>

      {/* Button to submit command line */}
      <button onClick={() => handleSubmit(commandString)}>Submit</button>

      {/* User change for mode */}
      <button onClick={() => changeMode(props.mode)}>Mode: {props.mode}</button>
    </div>
  );
}
