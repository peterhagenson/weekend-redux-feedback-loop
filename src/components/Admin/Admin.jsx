import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Button from '@mui/material/Button';

function Admin() {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback()
    }, [])

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/admin'
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            setFeedback(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    const deleteRow = () => {
        // let key = event.target.id

        axios({
            method: 'DELETE',
            url: `/admin/${key}`
        }).then((response) => {
            console.log('deleted!');
            getFeedback();
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <Router>
            <Route path="/admin">
                <h1>Admin Page</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Feeling</TableCell>
                                <TableCell align="right">Understanding</TableCell>
                                <TableCell align="right">Support</TableCell>
                                <TableCell align="right">Comments</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedback.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="right">{row.feeling}</TableCell>
                                    <TableCell align="right">{row.understanding}</TableCell>
                                    <TableCell align="right">{row.support}</TableCell>
                                    <TableCell align="right">{row.comments}</TableCell>
                                    <TableCell>
                                        {/* <Button onClick={deleteRow(key)}>Delete</Button> */}
                                        <Button onClick={deleteRow}>Delete Row</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Route>
        </Router>

    )
}

export default Admin;