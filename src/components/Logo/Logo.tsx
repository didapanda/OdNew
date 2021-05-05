import React from 'react'
import logo from '../../assets/img/logo.svg'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

const Logo: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="ml-12 mb-16 pb-16">
      <img
        className={classes.img}
        max-height="150"
        max-width="250"
        alt="Pandaswap"
        src={logo}
      />
    </div>
  )
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      marginTop: '40px',
      marginLeft: '-20px !important',
      maxHeight: '150px',
      maxWidth: '295px',
      zIndex: 900,
    },
  }))
export default Logo
