'use client'
import { Button } from "@mui/joy";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import React, { useState } from "react";
import Toaster from "@repo/ui/toaster";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { deleteTemplate } from "../../../../lib/services/prompts-service";


export default function Delete({ id }: { id: string }) {
    const initial = { message: null, error: null };
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                size="sm"
                variant="plain"
                color="danger"
                onClick={async () => {
                    await deleteTemplate(initial, [id]);
                    setOpen(true);
                }}
                startDecorator={<DeleteRoundedIcon />}
            >
                Delete
            </Button>
            <Toaster color="warning" icon={<CheckCircleIcon />} open={open} onClose={() => setOpen(false)} >Prompt deleted</Toaster>
        </>
    )
}