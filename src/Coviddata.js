import React, { useEffect, useState } from 'react'
const Coviddata = () => {



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '80ef8a3537mshcec37a554354948p1d48f0jsn2469787e946c',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    const abc = ['india', 'china', 'japan']
    const [Input, setInput] = useState('all');
    const [Dataapi, setDataapi] = useState(null);
    const [countryname, setcountryname] = useState(['india', 'china']);
    useEffect(() => {
        CountryName();
        Data();

    }, [Input]);

    function Data() {

        const url = `https://covid-193.p.rapidapi.com/statistics?country=${Input}`;
        fetch(url, options)
            .then(res => res.json())
            .then(json => setDataapi(json))
            .catch(err => console.error('error:' + err));

    }

    async function CountryName() {
        const response = await fetch('https://covid-193.p.rapidapi.com/countries', options)
        const data = await response.json();
        setcountryname(data.response);
    }







    console.log(Dataapi)
    return (
        <>

            <div className='mt-10 flex flex-1 justify-center '>
                {<select onChange={(event) => { setInput(event.target.value) }} className='focus:border-blue-700 border-2 h-10 rounded-xl  border-black text-blue-700' >

                    {countryname.map((xyz) => {
                        return <option>{xyz}</option>
                    })}
                </select>}


            </div>
            {
                !Dataapi ? (
                    <p>no data found</p>) : (
                    <div className=' m-10 flex justify-center text-center'>

                        <div className=" p-10 rounded-2xl">

                            <h1 className="text-5xl font:bold">Hello,{JSON.stringify(Dataapi.response[0]['country'])} !</h1>

                            < hr className="my-4" />
                            <div >
                                <div className='md:flex space-x-5 justify-center '>
                                    <div className='bg-gradient-to-r  from-cyan-500 text-left text-2xl text-blue-800 font-bold  to-blue-300  p-3  font-serif  rounded-2xl '><p>Active  (0.01%)</p>
                                        <p className='p-3 '>{JSON.stringify(Dataapi.response[0].cases.active)}</p></div>
                                    <div className='bg-gradient-to-r  from-green-500 to-green-300  p-3  font-bold text-green-800 text-2xl rounded-2xl '><p>Recovered ( {((JSON.stringify(Dataapi.response[0].cases.recovered) / JSON.stringify(Dataapi.response[0].population)) * 100).toFixed(2)}%)</p>
                                        <p className='p-3 '>{JSON.stringify(Dataapi.response[0].cases.recovered)}</p></div>
                                    <div className='bg-gradient-to-r from-pink-500 to-pink-200 p-3 text-pink-900 font-bold text-2xl  rounded-2xl '><p>Death (0.01%)</p>
                                        <p className='p-3 '>{JSON.stringify(Dataapi.response[0].deaths.total)}</p></div>

                                </div>
                                <div className='p-2'>
                                    <div className='  bg-gradient-to-r from-indigo-500 text-white text-3xl to-indigo-200 rounded-xl font-bold p-2'>Total Population :{JSON.stringify(Dataapi.response[0].population)}  </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </>


    )
}

export default Coviddata
