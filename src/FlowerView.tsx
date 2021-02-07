import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import {useEffect} from "react";
import flowerActions from "./store/actions/flowerActions";

const FlowerView = () => {
    const dispatch = useDispatch();
    const { isLoading, flowers } = useSelector((state: AppState) => state.flower);

    useEffect(() => {
       dispatch(flowerActions.getFlowers)
    }, [])

    return (
        <div>
            {isLoading ? <div>LADOWANIE...</div> : <div>Liczba zaladowanych kwiatkow: {flowers.length}</div>}
        </div>
    )
}

export default FlowerView