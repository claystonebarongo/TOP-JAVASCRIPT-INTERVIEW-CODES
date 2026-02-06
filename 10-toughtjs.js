function flatten(arr) {
    let result = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            // If it's an array, recursive call and spread the results
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });

    return result;



}

// Modern "Cheat" way: arr.flat(Infinity);