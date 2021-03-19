import { Container, CssBaseline, IconButton, Link, makeStyles, Typography } from '@material-ui/core'
import { GitHub, Language, LinkedIn } from '@material-ui/icons';
import React from 'react';
import './footer.css'

function Copyright() {
    return (
        <Typography variant="body2" color="white">
            {'Copyright © '}
                {"Netflix inspired app by Jason Wintery"}
            {" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        display: "flex",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        // backgroundColor:
        //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        backgroundColor: "black",
        color: "white"
    },
}))

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Sticky footer
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1">
                    Sticky footer placeholder.
                </Typography>
            </Container> */}
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
                <Container>
                    <Typography variant="body1">If you want to learn more about my projects, I can be reached at the following icons. Thank you.</Typography>

                </Container>
                <Container maxWidth="sm">
                    <IconButton>
                        <a target="_blank" href="https://www.linkedin.com/in/jasonwintery/">
                            <LinkedIn className="footer__linkedin" src="https://www.linkedin.com/in/jasonwintery/" />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a target="_blank" href="https://github.com/oranje19">
                            <GitHub className="footer__github" src="https://www.linkedin.com/in/jasonwintery/" />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a target="_blank" href="http://www.jasonwintery.com/">
                            <Language className="footer__portfolio" src="https://www.linkedin.com/in/jasonwintery/" />
                        </a>
                    </IconButton>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
