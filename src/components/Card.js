import PropTypes from "prop-types";

const countryImage = "https://okanhastanesi.com.tr/upload/icerik/corona-virusu-nedir-nasil-bulasir_20200124152509.jpg"

const Card = ({ country, totalCases, totalRecovered, totalDeaths }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition">
            <img className="w-full" src={countryImage} alt="Country" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{country}</div>
                <p className="text-gray-700 text-base">
                    Total Case:{totalCases}
                </p>
                <p className="text-gray-700 text-base">
                    Total Deaths:{totalDeaths}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-small font-semibold text-gray-700 mr-2 mb-2">
                    #{totalRecovered}
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.string,
    totalCases: PropTypes.string,
    totalRecovered: PropTypes.string,
    totalDeaths: PropTypes.string,
}

Card.defaultProps = {
    country: "",
    totalCases: "",
    totalRecovered: "",
    totalDeaths: "",
}

export default Card;