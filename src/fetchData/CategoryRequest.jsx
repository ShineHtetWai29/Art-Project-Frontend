import axios from 'axios';
import React from 'react'

const CategoryRequest =async () => {
    
    const url = `http://localhost:8080/categories`;

    const res = await axios
        .get(url)
        .then((response) => {
            console.log("Response body ", response);
            return response;
        });
    return res;
}

export default CategoryRequest