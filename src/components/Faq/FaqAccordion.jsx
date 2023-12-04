import { useState } from "react";
import PropTypes from 'prop-types'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function FaqAccordion({ id, title, explanation }) {
    const [active, setActive] = useState(true);
    return (
        <div id={id} className="faq-accordion">
            <div className="faq-accordion__header">
                <h3>{title}</h3>
                <button onClick={() => setActive(!active)}>
                    {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
            </div>
            {active ? <div className="rows"></div> : ""}
            <p
                className={["faq-accordion__detail", active ? "active" : ""].join(" ")}
            >
                {explanation}
            </p>
        </div>
    )
}

FaqAccordion.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired
}

export default FaqAccordion