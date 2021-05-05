import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Button } from '@material-ui/core';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
  ) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        { date: '2020-01-05', customerId: '11091700', amount: 3 },
        { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
      ],
    };
  }
  
export default function Row(props: { row: any, index: number }) {
    const { row, index } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root} style ={ index % 2? { background : "#ffffff" }:{ background : "#fcfaf5" }}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                    {row.bamboo.map((bamboorow: any) => (
                      <div className="bg-wt my-2 d-flex flex-row">
                        {/* <v-row class="my-2 d-flex flex-row"> */}
                          <div className="d-flex flex-column">
                            <Button className="button-color js">
                              <img className="mr-2" />
                              <span> GET </span>
                            </Button>
                            <Button className="button-color js mtop">
                              <img className="mr-2" />
                              <span> View contract </span>
                            </Button>
                            <Button className="button-color js mtop">
                              <img className="mr-2" />
                              <span> View info </span>
                            </Button>
                          </div>
                          <div className="d-flex card">
                            <Card className="mx-auto bg-cl">
                              <div className="d-flex">
                                <div className="">
                                  <CardContent>
                                    <p>
                                      <span className="mr-2 card-text-red">BAMBOO</span>
                                      <span className="green-text">EARNED</span>
                                    </p>
                                    <p className="mb-0">
                                      <span className="mr-2 price">{bamboorow.earned}</span>
                                    </p>
                                    <p className="mb-0">
                                      <span className="green-text price-sub">~10 USD</span>
                                    </p>
                                  </CardContent>
                                </div>
                                <div className="bg-cl">
                                  <CardActions>
                                    <Button className="full-width harvestbtn" >
                                      HARVEST
                                    </Button>
                                  </CardActions>
                                </div>
                              </div>
                            </Card>
                          </div>
                          <div className="card">
                            <Card className="mx-auto ht" variant="outlined">
                              <CardContent>
                                <Typography className="card-text-red mb-4">
                                  Stake
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Button className="full-width stakebtn" variant="outlined">
                                 Stake
                                </Button>
                              </CardActions>
                            </Card>
                          </div>
                      </div>
                    ))}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  