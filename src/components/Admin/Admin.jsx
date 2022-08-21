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
import Paper from '@mui/material/Paper';
import { useState } from 'react';

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


    return (
        <Router>
            <Route path="/admin">
                <h1>Admin Page</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Understanding</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedback.map((row) => (
                                <TableRow
                                    key={row.id}>
                                    <TableCell>{row.feeling}</TableCell>
                                    <TableCell>{row.understanding}</TableCell>
                                    <TableCell>{row.support}</TableCell>
                                    <TableCell>{row.comments}</TableCell>
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