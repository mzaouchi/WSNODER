function Multi(a,b){
    return a * b
}

// module.exports = Multi
module.exports.Multi = Multi
function Sous(a,b){
    return a- b 
}

module.exports.Sous = Sous


// module.exports = {Sous,Multi}

console.log(module.exports)