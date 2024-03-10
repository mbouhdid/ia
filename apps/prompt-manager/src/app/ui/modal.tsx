'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Textarea from './textarea';
import { Input, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { PlusOne } from '@mui/icons-material';
import { createTemplate } from '../lib/services/prompts-service';
import { useFormState } from 'react-dom';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createTemplate, initialState);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" endIcon={<PlusOne />}> Create </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create prompt
                    </Typography>
                    <form action={dispatch} onSubmit={handleClose}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField required id="standard-basic" name="name" label="Name" variant="standard" />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Textarea name="template" value="" > </Textarea>
                        </Typography>
                        <div className="mt-1">
                            <Stack direction="row" justifyContent={"flex-end"} spacing={3}>
                                <div>
                                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                                </div>
                                <div>
                                    <Button type="submit" variant="contained">Create</Button>
                                </div>
                            </Stack>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}