'use client'
import { Alert, Button, Snackbar } from "@mui/joy";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from "react";
import { EventEmitter } from "stream";

export default function Toaster(
    { children, color = 'success', icon = <CheckCircleIcon />, open = false, onClose }: Readonly<{ children: React.ReactNode; color: 'success' | 'warning', icon: React.ReactElement, open: boolean, onClose: any }>,
) {
    return (
        <Snackbar
            variant="soft"
            color={color}
            open={open}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            startDecorator={icon}
        >
            {children}
        </Snackbar>
    )
}