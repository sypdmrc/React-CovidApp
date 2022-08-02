import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const Header = ({ activeTitle, onMenuChange }) => {

    const [_activeTitle, setActiveTitle] = useState(activeTitle)
    const [menuItems] = useState([
        {
            title: "ülkelere göre corona değerleri",
            active: true,
            value: 1
        },
        {
            title: "kayda geçmiş tüm corona değerleri",
            value: 2
        },
        {
            title: "kıtalara göre corona değerleri",
            value: 3
        },
    ])
    return (
        <nav className="bg-gray-800 border-gray-800 py-5 px-20">
            <div className="container flex flex-wrap items-center mx-auto">
                <Logo className="w-25" />
                <div className="w-75 ml-10 mt-2">
                    <ul className="flex flex-row mt-1 font-medium space-x-4">
                        {menuItems.map((item) => {
                            return (
                                <MenuItem active={item.title === _activeTitle} key={item.title} title={item.title} onClick={(title) => {
                                    setActiveTitle(title)
                                    onMenuChange(item.value)
                                }} />
                            )
                        })}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func,
}

Header.defaultProps = {
    activeTitle: "Link",
    onMenuChange: () => null
}

export default Header;