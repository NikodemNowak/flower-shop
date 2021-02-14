import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import {useEffect} from "react";
import clientActions from "./store/actions/clientActions";

const ClientView = () => {
    const dispatch = useDispatch();
    const { isLoading, clients} = useSelector((state: AppState) => state.client);

    useEffect(() => {
        dispatch(clientActions.getClients)
    }, [])

    return(
        <div>
            {isLoading ? <div>LADOWANIE...</div> : <div>Klienci: {clients}</div>}

        </div>
    )
}

export default ClientView