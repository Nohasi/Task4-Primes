import { PrimesForm } from "./PrimesForm";
import Box from '@mui/material/Box';

export const PrimesPage = () => {
    return (
        <div className="App">
            <div style={{display:"block"}}>
                <h1>Primes Checker</h1>
            </div>
            <div>
                <PrimesForm />
            </div>
            <div>
                {/* DISPLAY */}
            </div>
        </div>
    );
}