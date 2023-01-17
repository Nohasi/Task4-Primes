export const getPrimeResult = async (num: string) =>{
    try{
        // Sends response with the parameter asynchronously
        const response = await fetch(`prime?number=${num}`, {
            method: 'GET',
            mode: 'cors',
            headers:{'Accept': 'application/json'}
        });
        // returns the json payload back to component
        return await response.json();
    }
    catch (error){ //In case the fetch could not connect to the API server
        console.log('error: Could not connect to API server');
        return 'error: Could not connect to API server';
    }
}