import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Page from '../../components/Page'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Datatable from '../../components/Datatable';
const Pools: React.FC = () => {
  const {path} = useRouteMatch()
  const classes = useStyles()

  const columns = [
    'Dessert (100g serving)',
    'Calories',
    'Fat&nbsp;(g)',
    'Carbs&nbsp;(g)',
    'Protein&nbsp;(g)',
  ]

  const rows = [
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        price: 3.99,
        bamboo: [{earned:1500}]
    },
    {
        name: 'Eclair', 
        calories: 262, 
        fat: 16.0, 
        carbs: 24, 
        protein: 6.0,
        price: 3.79,
        bamboo: [{earned:1300}]
    },
    {
        name: 'Ice cream sandwich', 
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        price: 4.99,
        bamboo: [{earned:2500}]
    }
  ];
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
            <div className="page-parent">
                <h1 className="page-title ml-9">Pools</h1>
                <p className="page-subtitle ml-9 pl-1">Select your favorite pair. Stake Liquidity Pool (LP) Tokens to earn.</p>
                <div className="mx-9 mt-16">
                    <Datatable rows={rows} columns={columns}/>
                </div>
            </div>
        </Route>
      </Page>
    </Switch>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      buttonColor: {
        color: '#fe7171',
      },
      greenText: {
        color: '#97ab90',
        fontSize: '14px',
        fontWeight: 600,
      },
      cardTextRed: {
        color: '#fe7171 !important',
        fontSize: '14px',
        fontWeight: 600,
      },
      bgcl: {
        backgroundColor: '#fcfaf5',
      },
      bgwt: {
        backgroundColor: '#ffffff',
      },
      price: {
        color: '#335d2d',
        fontSize: '36px',
        fontWeight: 600,
      },
      priceSub: {
        color: '#97ab90',
        fontSize: '14px',
        fontWeight: 600,
      },
      harvestbtn: {
        backgroundColor: '#d4dbcd',
        color: '#97ab90',
        fontSize: '18px',
        fontWeight: 600,
      }
  })
)

export default Pools
