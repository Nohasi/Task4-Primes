import { useState } from "react";
export const PrimesForm = () => {
    let [num, setNum] = useState('');
    return (
        <form>
            <input 
                type="text" 
                value={num} 
                placeholder="Enter Number Here" 
                onChange={(e) => setNum(e.target.value)}
            />
            <button type="submit">Check for prime</button>
        </form>
    );
}