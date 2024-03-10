'use client';
import { HdrPlus, PlusOne } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import React from "react";

export default function Header({ title, actions }: { title: string, actions?: React.ReactNode }) {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}  >
                <Typography flex={1} variant="h3" gutterBottom>
                    {title}
                </Typography>
                <Box>
                    {actions}
                </Box>
            </Box>
            <Divider className="mb-1" />
        </>
    );
}