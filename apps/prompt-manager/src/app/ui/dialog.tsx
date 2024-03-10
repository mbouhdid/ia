'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Textarea from './textarea';
import { PlusOne } from '@mui/icons-material';
import { updatePrompt } from '../lib/services/request-service/prompts-request-service';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button variant="contained" endIcon={<PlusOne />} onClick={handleClickOpen}>
                create
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        await updatePrompt({ name: formJson.name, template: formJson.template });
                        window.location.reload();
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Create prompt</DialogTitle>
                <DialogContent>
                    <TextField style={{ marginBottom: '1rem' }} required id="standard-basic" name="name" label="Name" variant="standard" />
                    <Textarea name="template" value="" > </Textarea>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}