import StyledException from "./StyledException";

const Exception = (props) => {
    return (
        <StyledException>
            <div>{props.children}</div>
        </StyledException>
    )
}

export default Exception; 