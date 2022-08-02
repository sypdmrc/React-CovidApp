import PropTypes from "prop-types";

const MenuItem = ({ title, active, onClick }) => {
    return (
        <li>
            <a onClick={() => {
                onClick(title)
            }}
                className={`capitalize cursor-pointer border-0 py-2 pr-4 pl-3 ${active==true ? "text-green-300" : "text-gray-400"} hover:text-green-300`}>
                {title}
            </a>
        </li>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}

MenuItem.defaultProps = {
    title: "Link",
    active: "false",
    onClick: () => null
}

export default MenuItem;