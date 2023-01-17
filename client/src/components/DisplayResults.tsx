export const DisplayResults = ({primeStatus, factors, primeFactors}: 
    {primeStatus: string, factors: number[], primeFactors: number[]}) => {
    return (
        <div className="container">
            <h2>Results:</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Prime</th>
                    <th>Factors</th>
                    <th>Prime Factors</th>    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{primeStatus}</td>
                    <td>{factors}</td>
                    <td>{primeFactors}</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}