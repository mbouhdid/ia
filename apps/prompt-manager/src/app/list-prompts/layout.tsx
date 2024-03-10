'use client'
import React, { Suspense } from "react";
import { TableSkeleton } from "../ui/skeletons";

import { Box } from "@mui/material";
import { Button, Sheet, Typography } from '@mui/joy';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import PromptList from "./components/prompt-list";
import Layout from "./components/layout";
import { FocusTrap } from '@mui/base/FocusTrap';
import CreatePrompt from "./components/create-prompt";
import SideNavPrompt from "./components/side-nav-prompt";

export default function RootLayout({
    children, params
}: Readonly<{
    children: React.ReactNode;
    params: { id: string }
}>) {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'self-start',
            }}
        >
            <SideNavPrompt params={params} />
            <Layout.Main>
                <Sheet
                    variant="outlined"
                    sx={{
                        minHeight: 500,
                        borderRadius: 'sm',
                        p: 2,
                        mb: 3,
                    }}
                >
                    {children}
                </Sheet>
            </Layout.Main>
        </Box>
    );
}