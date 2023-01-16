import { useState } from "react";
export const PrimesForm = ({num, setNum}: {num: string, setNum: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Primes Checker</h2>
                    <form>
                        <input 
                            type="text" 
                            value={num} 
                            placeholder="Enter Number Here" 
                            onChange={(e) => setNum(e.target.value)}
                        />
                        <button type="submit">Check for prime</button>
                    </form>
                </div>
            </div>
        </div>
    );
}