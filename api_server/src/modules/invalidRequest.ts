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

    // Checks if number passed is a negative, 0, or 1
    if(Number(req.query.number) <= 1){
        return `${req.query.number} is neither prime nor composite`
    }

    return null;
}