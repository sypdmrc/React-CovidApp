import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from '../consts/coronaDatas';
import Card from '../components/Card'
import axios from 'axios';



const CoronaForCountry = () => {

    const [data, setData] = useState([

    ])

    const [queryText, setQueryText] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
                headers: {
                    authorization: API_TOKEN,
                },
            })
            setLoading(false)
            setData(response.data.result)
           
        } 
        catch (error) {
            console.log(error.response.data.message)
        }

    }

    useEffect(() => {
        fetchData()
    }, [queryText])

    return (
        <div>
            <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 focus:outline-none focus:shadow-outline"
                    value={queryText}
                    placeholder="Ara"
                    onChange={(e) => {
                        setQueryText(e.target.value)
                    }} />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {loading && <p>Loading...</p>}
                {data.map((item) => {
                    return <Card key={item.country}
                        country={item.country}
                        totalDeaths={item.totalDeaths}
                        totalCases={item.totalCases}
                        totalRecovered={item.totalRecovered}

                    />
                })}
            </div>
        </div>
    )
}

export default CoronaForCountry;