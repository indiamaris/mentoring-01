function doInSeconds(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('success'), seconds * 1000);
    })
}
console.log('setting')

function start() {
    doInSeconds(2)
        .then(v => alert(v))
    .catch(error=>alert(error))
    
}
start()