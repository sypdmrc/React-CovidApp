import PropTypes from "prop-types";


const Logo = ({logo,title}) => {
    return (
        <div className="flex items-center mt-2">
            <img src={logo} alt={title} className="mr-3 h-10"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                {title}
            </span>
        </div>
    )
}

Logo.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string
}

Logo.defaultProps = {
    title: "Corona App",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL9fS6pc9MguqFtJq3O8_DKncmLEh9xdL-w&usqp=CAU"
}

export default Logo;