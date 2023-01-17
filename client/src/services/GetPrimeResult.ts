export const getPrimeResult = async (num: string) =>{
    try{
        const response = await fetch(`prime?number=${num}`, {
            method: 'GET',
            mode: 'cors',
            headers:{'Accept': 'application/json'}
        });

        return await response;
    }
    catch (error){
        console.log('error: Could not connect to API server');
        return 'error: Could not connect to API server';
    }
}