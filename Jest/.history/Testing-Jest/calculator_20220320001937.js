const mathOperations = {
    sum: function(a,b) {
        return a + b;
    },
    
    diff: function(a,b) {
        return a - b;
    },
    
    product: function(a,b) {
        return a * b;
    },

    percentage: function (a,b) {
        return (a / 100) * b;
    },
    
    pow: function(a,b) {
        return a ** b;
    }

}
module.exports = mathOperations