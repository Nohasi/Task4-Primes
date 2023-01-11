export const invalidRequest = (req: any) => {

    // Check if param does not exist
    if(!('number' in req.query)){
        return 'The \'number\' parameter is not passed'
    }

    // Check if parameter is empty
    if(req.query.number === ""){
        return 'No number is passed into parameter'
    }

    // Checks if non-number is passed
    if(isNaN(req.query.number)){
        return "Non-number is passed"
    }

    // number variable to be used in coming checks
    const reqNo: Number = Number(req.query.number);

    // Checks if number passed is a negative, 0, or 1
    if(reqNo <= 1){
        return `${req.query.number} is neither prime nor composite`
    }

    // Makes sure numbers passed through are not too big
    if(reqNo > 1000000000){
        return 'Number passed is too large'
    }

    //Checks if number passed is a float
    if(!Number.isInteger(reqNo)){
        return 'Value passed is not an integer'
    }

    return null;
}