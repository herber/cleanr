function cleanr(obj) {
    for (var part in obj) {

        var value = obj[part];

        if(value === undefined || value === '' || value === ' ') {
            delete obj[part];
        }

        if (typeof value === 'object' && !(value instanceof Date)) {
            cleanr(obj[part]);

            if(value === null){
                continue;
            }

            if(!Array.isArray(value) && !Object.keys(value).length) {
                delete obj[part];
            }
        }
    }

    return obj;
}

module.exports = cleanr;
