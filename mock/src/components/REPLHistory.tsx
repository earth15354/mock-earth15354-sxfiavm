import "../styles/main.css";

/**
 * REPLHistoryProps (array of string or string[][])
 */
interface REPLHistoryProps {
  history: string[][][];
}

/**
 *
 * @param props REPLHistoryProps, history
 * @returns
 */
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.history.map((tableData, tableIndex) => (
        <table key={tableIndex}>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
