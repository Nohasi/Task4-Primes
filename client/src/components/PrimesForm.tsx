import React from "react";
import { getPrimeResult } from "../services/GetPrimeResult";

export const PrimesForm = ({num, setNum, setPrimeStatus, setFactors, setPrimeFactors}: 
    {num: string, setNum: React.Dispatch<React.SetStateAction<string>>, 
        setPrimeStatus: React.Dispatch<React.SetStateAction<string>>,
        setFactors: React.Dispatch<React.SetStateAction<number[]>>,
        setPrimeFactors: React.Dispatch<React.SetStateAction<number[]>>}) => {

    // Function that calls service
    const getResult = (e: any) => {
        e.preventDefault();
        getPrimeResult(num).then((response: any) => {
            if(response.status === 200){
                setPrimeStatus(String(response.isPrime));
                setFactors(response.allFactors);
                setPrimeFactors(response.primeFactors);
            }
            else{
                setPrimeStatus(`Error: ${response.error}`);
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Enter Prime</h2>
                    <form>
                        <div className="row">
                            <input 
                                type="text" 
                                value={num} 
                                // pattern makes sure only numbers can be input into the text field
                                pattern="[0-9]*"
                                // maxLength so the largest number that can be input is 9,999,999
                                maxLength={7}
                                placeholder="Enter Number Here" 
                                // shorthand statement that doesn't call setnum if input is not number
                                onChange={(e) => setNum((v) => (e.target.validity.valid ? e.target.value : v))}
                            />
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-success" onClick={(e) => {getResult(e)}}>Check for prime</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}