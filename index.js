var Modulin = {loadModule: function(module){
    return new Promise((resolve, reject) => {
    fetch(`https://modulin.herokuapp.com/module/uniq`)
    .then(response => response.text())
    .then(response => {
eval(response);
resolve(require);
});
    })
}};;
