module.exports = function getError(msg, code){
    const err = new Error(msg);
    err.code = code;

    return err;
}