function NutritionDetailItem({ thumbnail, title, information }) {
    return (
        <div className="container-information">
            <div className="information-left">
                <img src={thumbnail} alt="" />
            </div>
            <div className="information-right">
                <div className="information-detail">
                    {title}
                </div>
                <div className="information-desc">
                    {information}
                </div>
            </div>
        </div>
    )
}

export default NutritionDetailItem