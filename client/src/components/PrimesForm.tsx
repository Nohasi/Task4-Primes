import React from "react";

export const PrimesForm = ({num, setNum}: {num: string, setNum: React.Dispatch<React.SetStateAction<string>>}) => {
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
                                placeholder="Enter Number Here" 
                                onChange={(e) => setNum(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-success">Check for prime</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}