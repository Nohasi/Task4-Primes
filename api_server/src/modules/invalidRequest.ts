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

    // Checks if number passed is a zero or negative
    if(Number(req.query.number) <= 0){
        return '0 or Negative number passed'
    }

    return null;
}