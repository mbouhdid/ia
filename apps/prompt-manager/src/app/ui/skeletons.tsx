import { Box, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from "@mui/material";

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

