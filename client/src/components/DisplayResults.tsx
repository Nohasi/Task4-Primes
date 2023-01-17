import { BuildFactorDisplays } from "../services/BuildFactorDisplays";

export const DisplayResults = ({primeStatus, factors, primeFactors}: 
    {primeStatus: string, factors: number[], primeFactors: number[]}) => {
    // Variables that will end up being displayed
    let factorsDisplay = '';
    let primeFactorsDisplay = '';

    // Function that determines whether factors will be displayed or not based on primeStatus
    [factorsDisplay, primeFactorsDisplay] = BuildFactorDisplays({primeStatus, factors, primeFactors, factorsDisplay, primeFactorsDisplay});

    return (
        <div className="container">
            <h2>Results:</h2>
            <table className="table table-bordered table-fixed table-sm same-col-widths">
                <thead>
                    {/* Styling to make all columns the same width */}
                <tr className="same-col-widths">
                    <th>Prime</th>
                    <th>Factors</th>
                    <th>Prime Factors</th>    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{primeStatus}</td>
                    <td>{factorsDisplay}</td>
                    <td>{primeFactorsDisplay}</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}