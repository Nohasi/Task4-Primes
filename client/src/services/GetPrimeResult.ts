export const getPrimeResult = async (num: number) =>{
    try{
        const response = await fetch(`prime?number=${num}`, {
            method: 'GET',
            mode: 'cors',
            headers:{'Accept': 'application/json'}
        });

        let resJson = await response.json();

        if (response.status === 200){

        }
    }
    catch (error){
        console.log('error: Could not connect to API server');
        return 'error: Could not connect to API server';
    }
}