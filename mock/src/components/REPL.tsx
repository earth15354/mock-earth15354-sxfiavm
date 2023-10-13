import { useState } from "react";
import "../styles/main.css";

import { REPLInput } from "./REPLInput";
import { REPLHistory } from "./REPLHistory";
import { Mode } from "./Mode";

/* Hashmap<String, Array<Array<String>>>
{"home/one.csv : [[num, val], [1, 1]]"} */

export default function REPL() {
  const [history, setHistory] = useState<(string | string[][])[]>([]);
  const [mode, setMode] = useState<string>("Brief"); // Default == Brief
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [loadedFile, setLoadedFile] = useState<Array<Array<string>>>([[]]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  return (
    <div className="repl">
      <Mode
        mode={mode}
        history={history}
        current={currentCommand}
        file={loadedFile}
        message={currentMessage}
      />
      <hr></hr>
      {/* CHANGED */}
      <REPLInput
        history={history}
        setHistory={setHistory}
        mode={mode}
        setMode={setMode}
        currentCommand={currentCommand}
        setCurrentCommand={setCurrentCommand}
        loadedFile={loadedFile}
        setLoadedFile={setLoadedFile}
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
      />
    </div>
  );
}
