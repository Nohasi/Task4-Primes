import { PrimesForm } from "./PrimesForm";
import { DisplayResults } from "./DisplayResults";
import { Header } from "./Header";
import { InputPanel } from "./InputPanel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export const PrimesPage = () => {
        let [num, setNum] = useState('');
        let [primeStatus, setPrimeStatus] = useState('');
        let [factors, setFactors] = useState(Array<number>());
        let [primeFactors, setPrimeFactors] = useState(Array<number>());

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
                <div className="row mrgnbtm">
                    <DisplayResults
                        primeStatus={primeStatus}
                        factors={factors}
                        primeFactors={primeFactors}
                    />
                </div>
            </div>
        </div>
    );
}