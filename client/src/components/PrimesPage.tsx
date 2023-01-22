import { PrimesForm } from "./PrimesForm";
import { DisplayResults } from "./DisplayResults";
import { Header } from "./Header";
import { InputPanel } from "./InputPanel";
import { ErrorMessage } from "./ErrorMessage";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export const PrimesPage = () => {
    // Setting states to be used in components
    let [num, setNum] = useState('');
    let [primeStatus, setPrimeStatus] = useState('');
    let [factors, setFactors] = useState(Array<number>());
    let [primeFactors, setPrimeFactors] = useState(Array<number>());

    // states for displaying errors
    let [errorMsg, setErrorMsg] = useState('');
    let [errorStatus, setErrorStatus] = useState(false);

    return (
        <div className="App">
            <Header></Header>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <PrimesForm 
                            num={num}
                            setNum={setNum}
                            setPrimeStatus={setPrimeStatus}
                            setFactors={setFactors}
                            setPrimeFactors={setPrimeFactors}
                            setErrorMsg={setErrorMsg}
                            setErrorStatus={setErrorStatus}
                        />
                    </div>
                    <div className="col-md-4">
                        <InputPanel
                            num={num}
                        ></InputPanel>
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                { // If no process has been done yet, do not show results/error panel
                    (primeStatus !== '')
                    ?<div className="row mrgnbtm">
                    { // If errorStatus is true, displays and error message. Else it displays the results
                        errorStatus
                        ? <ErrorMessage errorMsg={errorMsg}/>
                        : <DisplayResults
                            primeStatus={primeStatus}
                            factors={factors}
                            primeFactors={primeFactors}
                        />
                    }
                    </div>
                    :<div/>
                }
            </div>
        </div>
    );
}