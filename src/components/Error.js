import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div>
            <h1>Oops!!!</h1><br />
            <h2>Something went wrong!!</h2><br />
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}

export default Error;