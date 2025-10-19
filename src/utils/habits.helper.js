const throwErr = (err) => {
    throw { message: err.message, status: err.status};
}

const validateHabit = (Habit) => {
    if(!Habit){
        throwErr({message: "Habit data is required", status: 400});
    }
}

validateDay = (Day) => {
    const last = Day.slice(-1);
    const num = parseInt(last);
    if(num < 1 || num > 7 || !num){
        throwErr({message: "Day must be between 1 and 7", status: 400});
    }
}

module.exports = {
    throwErr,
    validateHabit,
    validateDay
}