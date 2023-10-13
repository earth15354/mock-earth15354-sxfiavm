import "../styles/main.css";

/**
 * REPLHistoryProps (array of string or string[][])
 */
interface REPLHistoryProps {
  history: (string | string[][])[];
}

/**
 *
 * @param props REPLHistoryProps, history
 * @returns
 */
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.history.map((entry, index) => (
        <div key={index}>
          {typeof entry === "string" ? (
            <p>{entry}</p>
          ) : (
            // If the entry is an array, assume it's table data
            <table>
              <tbody>
                {entry.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((column, columnIndex) => (
                      <td key={columnIndex}>{column}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
}
