import React from 'react';
import { AppBar,Avatar,Button,Toolbar,Typography } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png'
import {Link} from 'react-router-dom';


const Navbar = () => {

    const classes = useStyles();
    const user =null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>

        <Typography component={Link} to="/" className={classes.heading} variant='h2' align='centre'>Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height={60}/>
        </div>
        <Toolbar className={classes.toolbar}>
            {user?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}/>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondry'>Logout</Button>

                </div>
            ):(
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
            )}


        </Toolbar>
      </AppBar>
  )
}

export default Navbar;




























// import React from 'react';
// import { AppBar,Typography } from '@material-ui/core';
// import useStyles from './styles';
// import memories from '../../images/memories.png'
// // import {Link} from 'react-router-dom';


// const Navbar = () => {

//     const classes = useStyles();

//   return (
//     <AppBar className={classes.appBar} position='static'   color='inherit'>
//         <div className={classes.brandContainer}>

//         <Typography   className={classes.heading} variant='h2' align='centre'>Memories</Typography>
//         <img className={classes.image} src={memories} alt='memories' height={60}/>
//         </div>
//       </AppBar>
//   )
// }

// export default Navbar;