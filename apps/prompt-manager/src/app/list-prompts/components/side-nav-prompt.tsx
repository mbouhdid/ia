'use client'
import { Box, Button, Typography } from "@mui/joy";
import Layout from "./layout";
import CreatePrompt from "./create-prompt";

import React, { Suspense } from "react";
import PromptList from "./prompt-list";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { TableSkeleton } from "@/app/ui/skeletons";
import { ListSkeleton } from "@repo/ui/skeletons";

export default function SideNavPrompt({ params }: { params: { id: string } }) {
    const [open, setOpen] = React.useState(false);
    return (
        <Layout.SidePane>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ alignItems: 'center', gap: 1 }}>
                    <Typography level="title-lg" textColor="text.secondary" component="h1">
                        Mes prompts
                    </Typography>
                    <Typography level="title-sm" textColor="text.tertiary">
                        number
                    </Typography>
                </Box>
                <Button
                    size="sm"
                    startDecorator={<CreateRoundedIcon />}
                    onClick={(e) => {
                        e.preventDefault();
                        setOpen(true)
                    }}
                    sx={{ ml: 'auto' }}
                >
                    Create prompt
                </Button>
                <CreatePrompt open={open} onClose={() => setOpen(false)} />
            </Box>
            <Suspense key={1} fallback={<ListSkeleton />}>
                <PromptList />
            </Suspense>
        </Layout.SidePane>
    )
}