'use client';
import { Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography, styled } from "@mui/material";
import Link from "next/link";


export default function CardsList({ list }: { list: any[] }) {
    return (
        <Box sx={{ width: '100%' }}>

            <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    list.map((app) => {
                        return (
                            <Grid item={true} key={app.id} xs={6}>

                                <Link style={{ textDecoration: 'none' }} href={`${app.link}`}>

                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {app.name}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {app.template}
                                            </Typography>
                                        </CardContent>
                                    </Card>


                                </Link>
                            </Grid>
                        )
                    })
                }

            </Grid>

        </Box >

    );
}