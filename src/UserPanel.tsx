import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl, Switch,
    TextField
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/store";
import userPreferencesActions from "./store/actions/userPreferencesActions";
import flowerActions from "./store/actions/flowerActions";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
}));

const UserPanel = () => {
    const dispatch = useDispatch();
    const {darkMode} = useSelector((state: AppState) => state.userPreferences);
    const isDarkMode = () => {
        const mode = localStorage.getItem("darkMode")
        if (mode != null) {
            return JSON.parse(mode) === true
        } else{
            return darkMode
        }
    }

    useEffect(() => {
        userPreferencesActions.getUserInfo(dispatch)
    }, [])

    const themeToggler = () => {
        userPreferencesActions.changeTheme(dispatch, !darkMode)
    }


    const {control, errors: fieldsErrors} = useForm();
    const classes = useStyles();
    const [openChangeData, setOpenChangeData] = useState(false);
    const [openPasswords, setOpenPasswords] = useState(false);
    const [openDeleteAccounts, setOpenDeleteAccounts] = useState(false);

    const handleCloseChangeData = () => {
        setOpenChangeData(false);
    };

    const handleClosePasswords = () => {
        setOpenPasswords(false);
    };

    const handleCloseDeleteAccounts = () => {
        setOpenDeleteAccounts(false);
    };

    const handleOpenChangeData = () => {
        setOpenChangeData(true);
    }

    const handleOpenPasswords = () => {
        setOpenPasswords(true);
    }

    const handleOpenDeleteAccount = () => {
        setOpenDeleteAccounts(true);
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Grid item>
                        <Avatar alt="username" className={classes.large}/>
                    </Grid>
                    <Typography component="h1" variant="h5">
                        Panel
                    </Typography>
                    <form className={classes.form}>
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => handleOpenChangeData()}
                                >
                                    Change your data
                                </Button>
                                <Dialog open={openChangeData} onClose={handleCloseChangeData}>
                                    <DialogTitle id="form-dialog-title">Change your data</DialogTitle>
                                    <DialogContent>
                                        <form className={classes.form}>
                                            <FormControl fullWidth variant="outlined">
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Controller
                                                            name="firstName"
                                                            as={
                                                                <TextField
                                                                    autoFocus
                                                                    autoComplete="fname"
                                                                    name="firstName"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    id="firstName"
                                                                    helperText={fieldsErrors.firstName
                                                                        ? fieldsErrors.firstName.message : null}
                                                                    label="First Name"
                                                                    error={fieldsErrors.firstName}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify first name",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Controller
                                                            name="lastName"
                                                            as={
                                                                <TextField
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    id="lastName"
                                                                    label="Last Name"
                                                                    name="lastName"
                                                                    autoComplete="lname"
                                                                    helperText={fieldsErrors.lastName
                                                                        ? fieldsErrors.lastName.message : null}
                                                                    error={fieldsErrors.lastName}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify last name",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Controller
                                                            name="email"
                                                            as={
                                                                <TextField
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    id="email"
                                                                    label="Email Address"
                                                                    name="email"
                                                                    autoComplete="email"
                                                                    helperText={fieldsErrors.email
                                                                        ? fieldsErrors.email.message : null}
                                                                    error={fieldsErrors.email}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify email",
                                                                pattern: {
                                                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                                                    message: "password pattern example@gmail.com"
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Controller
                                                            name="phoneNumber"
                                                            as={
                                                                <TextField
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    id="phoneNumber"
                                                                    label="Phone Number"
                                                                    name="phoneNumber"
                                                                    autoComplete="phoneNumber"
                                                                    helperText={fieldsErrors.phoneNumber
                                                                        ? fieldsErrors.phoneNumber.message : null}
                                                                    error={fieldsErrors.phoneNumber}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify Phone Number",
                                                                minLength: {
                                                                    value: 3,
                                                                    message: "min 3 marks"
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Button onClick={handleCloseChangeData} color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button type="submit" variant="contained"
                                                            color="primary"
                                                            className={classes.submit}>
                                                        Save
                                                    </Button>

                                                </Grid>
                                            </FormControl>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => handleOpenPasswords()}
                                >
                                    Reset password
                                </Button>
                                <Dialog open={openPasswords} onClose={handleClosePasswords}>
                                    <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
                                    <DialogContent>
                                        <form className={classes.form}>
                                            <FormControl fullWidth variant="outlined">
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <Controller
                                                            name="oldPassword"
                                                            as={
                                                                <TextField
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="oldPassword"
                                                                    label="Password"
                                                                    type="password"
                                                                    id="oldPassword"
                                                                    autoComplete="current-password"
                                                                    helperText={fieldsErrors.oldPassword ? fieldsErrors.oldPassword.message : null}
                                                                    error={fieldsErrors.oldPassword}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify a password",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Password must have at least 8 characters"
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Controller
                                                            name="newPassword"
                                                            as={
                                                                <TextField
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="newPassword"
                                                                    label="New Password"
                                                                    type="password"
                                                                    id="newPassword"
                                                                    autoComplete="new-password"
                                                                    helperText={fieldsErrors.newPassword ? fieldsErrors.newPassword.message : null}
                                                                    error={fieldsErrors.newPassword}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify a password",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Password must have at least 8 characters"
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Controller
                                                            name="newPassword2"
                                                            as={
                                                                <TextField
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="newPassword2"
                                                                    label="Repeat New Password"
                                                                    type="password"
                                                                    id="newPassword2"
                                                                    autoComplete="new-password"
                                                                    helperText={fieldsErrors.newPassword2 ? fieldsErrors.newPassword2.message : null}
                                                                    error={fieldsErrors.newPassword2}
                                                                />
                                                            }
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{
                                                                required: "You must specify a password",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Password must have at least 8 characters"
                                                                }
                                                            }}
                                                        />
                                                    </Grid>
                                                    <br/>

                                                    <Button onClick={handleClosePasswords} color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button type="submit" variant="contained"
                                                            color="primary"
                                                            className={classes.submit}>
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </FormControl>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    onClick={() => handleOpenDeleteAccount()}
                                >
                                    Delete account
                                </Button>
                                <Dialog open={openDeleteAccounts} onClose={handleCloseDeleteAccounts}>
                                    <DialogTitle>Delete Account</DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handleCloseDeleteAccounts} color="primary">
                                            Cancel
                                        </Button>
                                        <Button color="secondary">
                                            Delete
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Switch checked={isDarkMode()} onChange={themeToggler}/> {!isDarkMode() ? <label>Light mode</label> :
                                <label>Dark mode</label>}
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}
export default UserPanel