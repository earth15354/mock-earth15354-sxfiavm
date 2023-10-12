import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import hashmap from './mockedJson';
 
interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  // CHANGED
  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>,
  mode: string,
  setMode: Dispatch<SetStateAction<string>>
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');

    // TODO: Change to whatever we decide to make mockedJson.ts file with\
    // Possibly List<List<string>>
    const [loadedFile, setLoadedFile] = useState<Array<Array<string>>>([[]]);

    
    // Manages the current amount of times the button is clicked
    //const [count, setCount] = useState<number>(0);

    // Manages mode
    //const [mode, setMode] = useState<string>('Brief');
    
    // This function is triggered when the button is clicked.

    function handleSubmit(commandString:string) {
      const words = commandString.split(' ');

      // parse the command string
      // check what command is given
      // In an if-else statement, call component for that command 
      const into_history = "Command: " + words[0] + "\n";

      if (words[0] == "view") {
        // "view"
        // call handler
        // into_history += "Output: " + return from handler
        // item.array.map
        // for every item in the array create a new row
        // so like: 3 nested forloop 
        // if helper function to produce html in string, then it will display html in text instead of actual value

      } else if (words[0] == "search") {
        // "search <column> <value>"
        // call handler
        // into_history += "Output: " + return from handler
        

      } else if (words[0] == "load_file") {
        const fish = hashmap[words[1]];
        setLoadedFile(fish);
        // "load csv_filepath"
        // call handler
        // output = handler_call
        // setLoadedFile(output)
        // into_history += "Output: " + return from handler

      } else {

      }
      
      props.setHistory([...props.history, into_history])
      setCommandString('')
    }

    function changeMode(mode:string) {
      if (mode == "Brief") {
        props.setMode("Verbose")
      } else {
        props.setMode("Brief")
      }
    }

    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">

            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}

            {/* Getting User Input from Command Line */}
            <fieldset>
              <legend>Command Line:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>

            {/* Button to submit command line */}
            <button onClick={() => handleSubmit(commandString)}>Submit</button>

            {/* User change for mode */}
            <button onClick={() => changeMode(props.mode)}>Mode: {props.mode}</button>

            {/* When command = load */}

            {/* When command = view */}
            {/* for handling verbose vs. brief when VIEWING: 
                if mode == brief:
                  display one line,
                else:
                  display command: body:*/}
  
        </div>
    );
  }