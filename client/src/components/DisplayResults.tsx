export const DisplayResults = () => {
    return (
        <div className="container">
            <h2>Results:</h2>
            <table style={{minWidth: 400, maxWidth: 400, borderCollapse: 'separate', borderSpacing: '0px 4px'}}>
                <tr>
                    <th>Input</th>
                    <th>Prime</th>
                    <th>Factors</th>
                    <th>Prime Factors</th>    
                </tr>
                <tr>
                    <td>12</td>
                    <td>False</td>
                    <td>[1, 2, 3, 4, 6, 12]</td>
                    <td>[2, 3]</td>
                </tr>
            </table>

        </div>
    );
}