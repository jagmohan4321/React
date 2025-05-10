
import "./UtilCard.css"
function UtilCard({ complexCard }) {
    console.log("this is come from the app.js file ", complexCard);
    console.dir(JSON.stringify(complexCard, null, 2));
    complexCard.demo();
    return (
        <>
            <div className="outerValues">
                <p>{complexCard?.id}</p>
                <p>{complexCard?.percentageCriteria}</p>
                <p>{complexCard?.info}</p>
                <div className="leftData_RightDat">
                    <div className="innerArray">
                        <p>{complexCard?.course[0]}</p>
                        <p>{complexCard?.course[1]}</p>
                        <p>{complexCard?.course[2]}</p>
                    </div>
                    <div className="innerObject">
                        <p>{complexCard?.studentList?.name}</p>
                        <p>{complexCard?.studentList?.age}</p>
                        <p>{complexCard?.studentList?.year}</p>

                        <p>{complexCard?.studentList['name']}</p>
                        <p>{complexCard?.studentList['age']}</p>
                        <p>{complexCard?.studentList['year']}</p>

                    </div>
                </div>
            </div>




        </>
    )
}

export default UtilCard;