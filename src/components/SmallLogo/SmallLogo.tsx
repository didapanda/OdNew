import React from 'react'
import Logo_panda from '../../assets/img/Logo_panda.svg'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

const SmallLogo: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="ml-2 mb-16 pb-16">
        <img
        className={classes.imgSmall}
        alt="Pandaswap"
        src={Logo_panda}
        />
    </div> 
  )
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgSmall: {
        marginTop: '40px',
      },
  }))
export default SmallLogo
