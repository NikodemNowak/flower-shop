import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import StoreIcon from '@material-ui/icons/Store';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import {useSelector} from "react-redux";
import rootReducer from "./store/reducer/rootReducer";
import {AppState} from "./store/store";

const open = (url: string) => {
    const newWindow = window.open(url, "_self")
    if (newWindow) newWindow.opener = null
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        }
    }),
);

export default function HomeBar() {
    const classes = useStyles();
    const {isLoggedIn} = useSelector((state: AppState) => state.authentication)

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Flower shop
                    </Typography>
                    { console.log(isLoggedIn) }
                    {isLoggedIn ?
                        <div>
                            <Button color="inherit" onClick={() => open('/')}> <HomeIcon/> Home</Button>
                            <Button color="inherit" onClick={() => open('/flowers/')}> <LocalFloristIcon/> Flowers</Button>
                            <Button color="inherit" onClick={() => open('/flowerTemplate/')}> <FilterVintageIcon/> Flowers Album</Button>
                            <Button color="inherit" onClick={() => open('/orders/')}> <StoreIcon/> Orders</Button>
                            <Button color="inherit" onClick={() => open('/userPanel/')}> <PersonIcon/> User Panel</Button>
                            <Button color="inherit" onClick={() => {
                                localStorage.clear()
                                window.location.reload(false);
                                open('http://localhost:3000/login')
                            }}> <StoreIcon/> log Out</Button>
                        </div>
                        : <div/>
                    }
                    <Button color="inherit" onClick={() => open('/login/')}> <VpnKeyIcon/> Login</Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}