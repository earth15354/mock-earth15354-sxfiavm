/**
 * ViewTable component props
 * @param data Array of Array of strings
 */
interface ViewTableProps {
  data: Array<Array<string>>;
}

/**
 * Function to display HTML table from data
 *
 * @param props ViewTableProps
 * @returns
 */
export function ViewTable(props: ViewTableProps) {
  // make a HTML table from data
  return (
    <div className="view-table">
      <table>
        <tbody>
          {props.data.map((row, index) => (
            <tr>
              {row.map((col, index) => (
                <td>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
