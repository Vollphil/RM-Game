const CheckImplementationTime = (recommendationNumber) =>{
    let hasToWaitOneRound = true;
    switch (recommendationNumber){
        case 2:
        case 11:
            hasToWaitOneRound = true;
            break;
        default:
            hasToWaitOneRound = false;

    }
    return hasToWaitOneRound;
}

export default CheckImplementationTime;