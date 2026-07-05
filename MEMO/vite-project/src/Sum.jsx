import React, { memo } from 'react';

function Sum({ n }) {
    console.log("sum called");
    function calSum(n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += i;
        }
        return sum;
    }

    return <h3>Sum of 1st {n} numbers is : {calSum(n)}</h3>;
}

export default memo(Sum);