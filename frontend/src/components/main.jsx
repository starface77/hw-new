import './style.scss'
function Hw(props) {
    return (

        <div className="homework">
            <h1>{props.title}</h1>
            <div>
                {props.children}
            </div>

        </div>

    );

}

export default Hw;

