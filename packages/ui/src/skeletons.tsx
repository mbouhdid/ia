import { List, ListDivider, ListItem, ListItemButton, ListItemDecorator } from "@mui/joy";
import { Box, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from "@mui/material";
import React from "react";

export function TableSkeleton() {
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>

                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                <Skeleton animation="wave" variant="text" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton animation="wave" variant="text" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton animation="wave" variant="text" />
                                            </TableCell>
                                            <TableCell align="right">
                                                <Skeleton animation="wave" variant="text" />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>


    );
}

export function TextSkeleton() {
    return (
        <Box sx={{ width: 500 }}>
            <Skeleton animation="wave" />
            <Skeleton animation="pulse" />
            <Skeleton animation="wave" />
            <br /><br />
            <Skeleton animation="wave" />
            <Skeleton animation="pulse" />
            <Skeleton animation="wave" />
            <br /><br />
            <Skeleton animation="wave" />
            <Skeleton animation="pulse" />
            <Skeleton animation="wave" />
        </Box>
    );
}

export function ListSkeleton() {
    return (
        <List>
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem sx={{ p: 0 }}>
                        <ListItemButton
                            sx={{ p: 2 }}
                        >
                            <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                <Skeleton variant="circular" width={48} height={48} />
                            </ListItemDecorator>
                            <Box sx={{ pl: 2, width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        mb: 0.5,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <Skeleton variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />

                                    </Box>
                                    <Skeleton variant="rectangular" width={50} height="1em" />
                                </Box>
                                <Skeleton variant="rectangular" width={200} height="1em" />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                    <ListDivider sx={{ m: 0 }} />
                </React.Fragment>
            ))}
        </List>
    );
}

