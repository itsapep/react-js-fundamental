// Props
// when parent component pass a read-only values to child component
// props in function becomes a parameter
function BodyComponentFunc(props) {
    // function only needs to return
    return (
        <>
            <h1>Body Component Function</h1>
            <p>Welcome {props.firstName}</p>
        </>
    )
}

export default BodyComponentFunc;