import {Redirect, Route} from "react-router";
import {useEffect, useState} from "react";
import instance from "./store/actions/axios";
import {useDispatch, useSelector} from "react-redux";
import {AUTHENTICATION_FAILURE, AUTHENTICATION_SUCCESS} from "./store/actions/authenticationActions";
import {AppState} from "./store/store";

// @ts-ignore
export const ProtectedRoute = ({component: Component, ...rest}) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state: AppState) => state.authentication)

    useEffect(() => {
        async function checkAuthentication() {
            if (localStorage.getItem("accessToken") == null || localStorage.getItem("refreshToken") == null) {
                dispatch({type: AUTHENTICATION_FAILURE})
                setLoading(false)
            }
            instance.post('/api/token/verify/', {access: localStorage.getItem("accessToken")}).then(r => {
                console.log(r)
                dispatch({type: AUTHENTICATION_SUCCESS})
                setLoading(false)
            }).catch(reason => {
                console.log(reason.toString())

                instance.post('/api/token/refresh/', {refresh: localStorage.getItem("refreshToken")}).then(r => {
                    console.log(r)
                    localStorage.setItem("accessToken", r.data.accessToken)
                    dispatch({type: AUTHENTICATION_SUCCESS})
                    setLoading(false)
                }).catch(reason1 => {
                    dispatch({type: AUTHENTICATION_FAILURE})
                    setLoading(false)
                })
            })
        }

        console.log(isLoggedIn)
        checkAuthentication()
    }, [loading])

    if (loading) {
        return <div></div>
    } else {
        return (
            <Route {...rest} render={(props) => (
                isLoggedIn ?
                    <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            )}/>
        );
    }

}

// @ts-ignore
export const PublicRoute = ({component: Component, ...rest}) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state: AppState) => state.authentication)

    useEffect(() => {
        async function checkAuthentication() {
            if (localStorage.getItem("accessToken") != null && localStorage.getItem("refreshToken") != null) {
                dispatch({type: AUTHENTICATION_SUCCESS})
            }
            setLoading(false)
        }

        checkAuthentication()
    }, [loading])

    if (loading) {
        return <div></div>
    } else {
        return (
            <Route {...rest} render={(props) => (
                <Component {...props} />
            )}/>
        );
    }

}