import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react'

const Weather = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '80ef8a3537mshcec37a554354948p1d48f0jsn2469787e946c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    let [value, setvalue] = useState(null);
    const [Search, setSearch] = useState('pune');
    useEffect(() => {
        return () => {
            axios.get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${Search}`, options)
                .then((response) => setvalue(response.data)).catch(err => console.error(err));
            console.log(Search)

        };
    }, [Search]);
    console.log(value)




    //let temp = JSON.stringify(value['current']);
    return (
        <>
            <div className='App'>





                <section className="vh-100" style={{ "background-color": "#f5f6f7" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-10 col-lg-8 col-xl-6">

                                <div className="card bg-dark text-white" >
                                    <div className="bg-image">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                                            className="card-img" alt="weather" />
                                        <div className="mask" style={{ "background-color": "rgba(190, 216, 232, .5)" }} ></div>
                                    </div>
                                    <div className="card-img-overlay text-dark p-5">
                                        <input type="text" onChange={(event) => { setSearch(event.target.value) }} />
                                        {!value ? (
                                            <p>no data found</p>) : (<> <h4 className="mb-0">{JSON.stringify(value.location.name)}, {JSON.stringify(value.location.region)}, {JSON.stringify(value.location.country)}</h4>
                                                <p className="display-2 my-3">{JSON.stringify(value.current.temp_c)}C</p>
                                                <p className="mb-2"><strong>Last updated on :{JSON.stringify(value.current.last_updated)}</strong></p>
                                                <h5>{JSON.stringify(value.current.condition.text)}</h5></>)}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Weather;
