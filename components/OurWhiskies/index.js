import React, { useState, useEffect } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';
import Layout from '../Layout/index';
import BannerWrap from '../BannerWrap';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TABLEHEADERS } from '../../constants/tableHeaders';

function OurWhiskies() {
  const [whiskies, setWhiskies] = useState([]);

  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Our whiskies!A:A?key=${process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => fetchRows(data.values.length)) //grab the number of rows and use that in the second fetch query so that it's dynamic
  }, []);

  function fetchRows(val) {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Our whiskies!A2:C${val}?key=${process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => setWhiskies(data.values))
  };

  let headers = TABLEHEADERS.map((header) => (
    <TableCell
      key={header.id}
      style={{ minWidth: header.minWidth }}
      className={classnames(
        styles.stickyHeader,
        header.label === 'Rank' && styles.rank
      )}
    >
      {header.label}
    </TableCell>
  ));

  let rows = whiskies.map((whiskey) => (
    <TableRow 
      key={whiskey[0]}
    >
      <TableCell 
        key={whiskey[0]}
        align='center'
        style={{ borderRight: '1px solid black' }}
      >
        {whiskey[0]}
      </TableCell>
      <TableCell key={whiskey[1]}
        style={{ backgroundColor: 'white' }}
      >
        {whiskey[1]}
      </TableCell>
      <TableCell key={whiskey[2]}
        style={{ backgroundColor: 'white' }}
      >
        {whiskey[2]}
      </TableCell>
    </TableRow>
  ));

  return (
    <div>
      <Layout>
        <BannerWrap />
        <div className={styles.textContainer}>
          <h3>Our Whiskies</h3>
          <h5>
            Access full ratings
            <a href={`https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/edit#gid=1971787420`} target='_blank'>here</a>
          </h5>
        </div>
        <div className={styles.tableContainer}>
          <Table className={styles.tableStyles}>
            <TableHead>
              <TableRow>
                {headers}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </div>
      </Layout>
    </div>
  )
}

export default OurWhiskies;