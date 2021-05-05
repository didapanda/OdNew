import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
// import DisclaimerModal from './components/DisclaimerModal'
// import MobileMenu from './components/MobileMenu'
import AccountButton from './components/AccountButton'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
// import useModal from './hooks/useModal'
import theme from './theme'
import Farms from './views/Farms'
import Home from './views/Home'
import Staking from './views/Staking'

import Pools from './views/Pools'

import typebg from './assets/img/typebg.svg'
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from './components/Logo';
import SmallLogo from './components/SmallLogo';

import bamboo from './assets/img/bamboo.svg';
import home from './assets/img/home.svg';
import infos from './assets/img/infos.svg';
import pools from './assets/img/pools.svg';
import trade from './assets/img/trade.svg';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  let logo;
  const classes = useStyles();
  const theme = useTheme();
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

  useEffect(() => {
    setOpen(!isMobile)
    if (!isMobile) {
      logo = <Logo />;
    } else {
      logo = <SmallLogo />;
    }
  }, [isMobile])

  if (!isMobile) {
    logo = <Logo />;
  } else {
    logo = <SmallLogo />;
  }
  return (
    <Providers>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            {logo}
            <div className={isMobile ? '' : 'ml-10 mr-14'}>
              <List>
                {['Home', 'Pools', 'Trade', 'Farm', 'Infos'].map((text, index) => (
                  <ListItem onClick={(event: any) => handleListItemClick(event, index)}
                   className={classes.item} selected={selectedIndex === index} button 
                   key={text} component={Link} to={text === 'Home' ? '/' : '/'+text.toLowerCase()}>
                    <ListItemIcon className={!isMobile ? classes.menuIcon : classes.item}>{index === 0 ? 
                                  <img src={home} /> : 
                                  index === 1 ? 
                                  <img src={pools} /> :
                                  index === 2 ?
                                  <img src={trade} /> :
                                  index === 3 ?
                                  <img src={bamboo} /> : 
                                  <img src={infos} /> }</ListItemIcon>
                    {!isMobile ? <ListItemText className={classes.itemText} primary={text} /> : '' }
                  </ListItem>
                ))}
              </List>
            </div>
            <Divider />
            <div className="pt-4 text-center">
              <Typography className={classes.text}>$BAMBOO PRICE</Typography>
              {!isMobile ? <Typography className={classes.bambooValue}>$100K</Typography> :
              <Typography className={classes.bambooValue}>$100K</Typography>}
            </div>

            {!isMobile ? <div className={classes.button}><AccountButton /></div> : ''}
          </Drawer>
          <main className={classes.content}>
              <Route path="/" exact component={Home} />
              <Route path="/farm" component={Farms} />
              {/* <Route path="/pools" component={Staking} /> */}
              <Route path="/pools" component={Pools} />
          </main>
        </div>
      </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={43114}
        connectors={{
          walletconnect: { rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'},//'https://ropsten.infura.io/v3/bd0c96c26be54dc7ab363c7e2bdfe746' },
        }}
      >
        <SushiProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

export default App


const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      width: '100vw',
      height: '100vh',
      backgroundImage: "url(" + typebg + ")",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    icon: {
      height: '40px',
      width: '40px',
    },
    imgSmall: {
      marginTop: '40px',
    },
    hr: {
      maxWidth: '320px',
    },
    text: {
      color: '#00000059',
      fontWeight: 700,
      fontSize: '14px',
      whiteSpace: 'pre-line',
      paddingRight: '13px',
    },
    bambooValue: {
      fontWeight: 700,
      fontSize: '18px',
      paddingRight: '78px',
    },
    button: {
      left: '84px',
      position: 'absolute',
      bottom: '46px',
    },
    background: {
      zIndex: 0,
    },
    item: {
      justifyContent: 'center',
      "&.active": {
        background:'black',
      },
    },
    menuIcon: {
      marginLeft: '16px',
      paddingLeft: '16px',
      justifyContent: 'flex-end',
    },
    itemText: {
      textAlign: 'center',
      paddingRight: '40px',
      fontSize: '18px',
    },
  }),
);
