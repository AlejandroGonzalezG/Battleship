import { useRouteError } from "react-router-dom";

function HandlerError(){
    const error = useRouteError();

    return (
        <>
        <div>
            <h1> Cuidado! </h1>
            <p>Ha ocurrido un error </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
        </>
    );
}

export default HandlerError;