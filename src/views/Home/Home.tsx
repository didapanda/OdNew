import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import bubble_with_bg from '../../assets/img/bubble_with_bg.svg'
import avaxlogo from '../../assets/img/avaxlogo.png';

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import AccountButton from '../../components/AccountButton'

const Home: React.FC = () => {
  const classes = useStyles();
  const [width, setWidth] = useState<number>(window.innerWidth);
  let isMobile: boolean = (width <= 768);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  index: number,
  ) => {
  setSelectedIndex(index);
  };

  useEffect(() => {
  window.addEventListener('resize', handleWindowSizeChange);
  return () => {
    window.removeEventListener('resize', handleWindowSizeChange);
    // setOpen(isMobile);
  }
  }, []);

  useEffect(() => () => isMobile, [isMobile])
  return (
    <Page>
      { !isMobile ? <div className={classes.background}>
        {/* <Container>
          <Balances />
        </Container> */}
      {/* <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="👨‍🌾 See the Farm" to="/farms" variant="secondary" />
      </div> */}
        <div className={classes.parent}>
          <p className={classes.bigText}>PANDA SWAP</p>
          <p className={classes.smallText}>Stake your Pandaswap LP tokens to start growing your very own $BAMBOO !</p>
          <div className={classes.footer}>
            <p className={classes.powered}> POWERED BY
            <img className={classes.logo} src={avaxlogo} /></p>
          </div>
        </div>
      </div> : 
      <div className={classes.parentMini}>
        <p className={classes.bigTextMini}>PANDA SWAP</p>
        <p className={classes.smallTextMini}>Stake your Pandaswap LP tokens to start growing your very own $BAMBOO !</p>
        <div className={classes.button}>
          <AccountButton />
        </div>
      </div>
      }
    </Page>
  )
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    background: {
      width: 'inherit',
      height: '100%',
      backgroundImage: "url(" + bubble_with_bg + ")",
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
    },
    logo: {
      paddingLeft: '14px',
    },
    parent: {
      height: 'auto',
      margin: 'auto',
      width: '80%',
    },
    bigText: {
      fontSize: '72px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '108px',
      letterSpacing: '0em',
    },
    smallText: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '27px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#168e80',
      width: '400px',
    },
    footer: {
      // display: 'flex',
      /* width: 500px; Can be in percentage also. */
      height: 'auto',
      margin: 'auto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '27px',
      letterSpacing: '0.2em',
      textAlign: 'left',
      color: '#00000059',
      flexDirection: 'row',
      marginTop: '150px',
    },
    button: {
      position: 'absolute',
      bottom: '40px',
      marginLeft: '20px'
    },
    smallTextMini: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '27px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#168e80',
    },
    parentMini: {
      color: '#335d2d',
      textAlign: 'center',
      margin: 'auto',
    },
    bigTextMini: {
      fontStyle: 'normal',
      fontSize: '48px',
      fontWeight: 700,
    },
    ht: {
      height: '100vh',
    },
    powered: {
      display: 'flex'
    },
  }))

export default Home
