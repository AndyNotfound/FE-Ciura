import { useState } from "react"
import PropTypes from 'prop-types'

function HelpAccordion({ id, title, desc }) {
    const [active, setActive] = useState(null);

    const handleToggle = () => {
        setActive(active === id ? null : id);
    };

    return (
        <div className="help-accordion">
            <div className="help-accordion__question">
                <p>{title}</p>
                <button onClick={handleToggle}>
                    <img src="/help-accordion-icon.svg" className={active ? "active" : ""} alt="" />
                </button>
            </div>
            <div className={["help-accordion__answer", active ? "active" : ""].join(" ")}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

HelpAccordion.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}


export default HelpAccordion