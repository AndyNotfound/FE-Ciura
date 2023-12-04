import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function NutritionCard({ id, thumbnail, title, desc }) {
    return (
        <Link to={`/nutrition/detail/${id}`} className="card">
            <div className="card-body">
                <img src={thumbnail} alt="Gambar" />
                <div className="card-header">{title}</div>
                <p>{desc}</p>
            </div>
        </Link>
    )
}

NutritionCard.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}

export default NutritionCard