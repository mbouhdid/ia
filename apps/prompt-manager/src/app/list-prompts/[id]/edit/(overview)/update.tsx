'use client'
import { Button } from "@mui/joy";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import React, { useState } from "react";
import Toaster from "@repo/ui/toaster";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CreatePrompt from "../../../components/create-prompt";
import { Prompt } from "../../../../lib/definitions/definitions";



export default function Update({ prompt }: { prompt: Prompt }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                size="sm"
                variant="plain"
                color="neutral"
                onClick={() => setOpen(true)}
                startDecorator={<EditRoundedIcon />}
            >
                Update
            </Button>
            <CreatePrompt prompt={prompt} open={open} onClose={() => setOpen(false)} />
        </>
    )
}