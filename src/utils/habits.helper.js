const throwErr = (err) => {
    throw { message: err.message, status: err.status};
}

module.exports = {
    throwErr
}