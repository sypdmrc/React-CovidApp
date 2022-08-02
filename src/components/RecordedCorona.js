import { useEffect } from "react";
import { useState } from "react";
import { API_TOKEN, API_URL } from "../consts/coronaDatas";
import axios from "axios";

const RecordedCorona = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await axios.get(`${API_URL}totalData`, {
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
        fetchData();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-full">
            {loading ? <p>Loading...</p> :
                <>
                    <h1 className="text-6xl text-gray-900 mb-4">Total Case:{data?.totalCases} m</h1>
                    <h1 className="text-6xl text-gray-800 mb-4">Total Deaths:{data?.totalDeaths} m</h1>
                    <h1 className="text-6xl text-gray-700">Total Recovered:{data?.totalRecovered} m</h1>
                </>
            }

        </div>
    )
}

export default RecordedCorona;