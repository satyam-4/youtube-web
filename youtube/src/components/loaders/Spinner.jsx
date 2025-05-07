import "./stylesheets/Spinner.css"

const Spinner = ({ height }) => {
    return (
        <div 
        style={{ height: height}}
        className="flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    )
}

export default Spinner