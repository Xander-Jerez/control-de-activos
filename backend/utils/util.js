function useRegexCorreo(input) {
    let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return regex.test(input);
}
function useRegexNombre(input) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}
function useRegexTelefono(input) {
    let regex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
    return regex.test(input);
}
module.exports={
    useRegexCorreo,
    useRegexNombre,
    useRegexTelefono
}