import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from './components/Row';
import { ViewColumnSharp } from '@material-ui/icons';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
//   price: number,
// ) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ],
//   };
// }

export default function Datatable(props: { rows: any, columns: any }) {
  const { rows, columns } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {columns.map((column: string) => ( <TableCell>{column}</TableCell>))}
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <Row key={row.name} row={row} index={index}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
