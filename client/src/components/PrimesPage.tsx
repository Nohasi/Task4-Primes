import { PrimesForm } from "./PrimesForm";
import { DisplayResults } from "./DisplayResults";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export const PrimesPage = () => {
        let [num, setNum] = useState('');
    return (
        <div className="App">
            <div className="container mrgnbtm">
                <div className="row">
                    <PrimesForm 
                        num={num}
                        setNum={setNum}
                    />
                </div>
            </div>
            <div className="container mrgnbtm">
                <div className="row mrgnbtm">
                    <DisplayResults />
                </div>
            </div>
        </div>
    );
}