import React, { useState, useEffect } from 'react';

const Test = () => {

    const [country, setcountry] = useState('');
    const [element, setelement] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '80ef8a3537mshcec37a554354948p1d48f0jsn2469787e946c',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    const url = ' https://covid-193.p.rapidapi.com/countries';
    const data = async () => {
        const response = await fetch(url, options)
        const data = await response.json();
        setcountry(data);
    }

    useEffect(() => {
        data();
    }, [element]);
    console.log(element);

    return (
        <div>

            <select onChange={(event) => { setelement(event.target.value) }}>
                {country.response.map((xyz) => {
                    return <option>{xyz}</option>
                })}


            </select>
        </div>
    );
}

export default Test;
