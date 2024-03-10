import * as React from 'react';
import Box from '@mui/joy/Box';
import ModalClose from '@mui/joy/ModalClose';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Sheet from '@mui/joy/Sheet';
import { Input, Stack, Typography } from '@mui/joy';

import { createTemplate } from '@/app/lib/services/prompts-service';
import { useFormState } from 'react-dom';
import Toaster from '../../../../../../packages/ui/src/toaster';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Prompt } from '@/app/lib/definitions/definitions';

interface CreatePromptProps {
    open?: boolean;
    onClose?: () => void;
    prompt?: Prompt;
}

const CreatePrompt = React.forwardRef<HTMLDivElement, CreatePromptProps>(
    function CreatePrompt({ open, onClose, prompt }, ref) {

        const intialState = { message: null, error: null };
        const [state, dispatch] = useFormState(createTemplate, intialState);
        const [openToaster, setOpenToaster] = React.useState(false);
        if (state?.prompt) {
            () => setOpenToaster(true);
        }
        return (
            <>
                <Toaster color="success" icon={<CheckCircleIcon />} open={openToaster} onClose={() => setOpenToaster(false)} >Prompt created</Toaster>
                <Sheet
                    ref={ref}
                    sx={{
                        alignItems: 'center',
                        px: 1.5,
                        py: 1.5,
                        ml: 'auto',
                        width: { xs: '100dvw', md: 600 },
                        flexGrow: 1,
                        border: '1px solid',
                        borderRadius: '8px 8px 0 0',
                        backgroundColor: 'background.level1',
                        borderColor: 'neutral.outlinedBorder',
                        boxShadow: 'lg',
                        zIndex: 1000,
                        position: 'fixed',
                        bottom: 0,
                        right: 24,
                        transform: open ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease',
                    }}
                >

                    <Box sx={{ mb: 2 }}>
                        <Typography level="title-sm">{prompt?.name ? `Modifier ${prompt.name}` : 'Créer un prompt template'}</Typography>
                        <ModalClose id="close-icon" onClick={onClose} />
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}
                        component='form'
                        action={dispatch}>
                        <FormControl>
                            <FormLabel>Nom</FormLabel>
                            <Input placeholder="nom" aria-label="Nom" name='name' defaultValue={prompt?.name ?? ''} />
                        </FormControl>
                        <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Textarea
                                placeholder="Type your prompt template here…"
                                aria-label="Template"
                                minRows={8}
                                name='template'
                                defaultValue={prompt?.template ?? ''}
                                endDecorator={
                                    <Stack
                                        direction="row"
                                        flexGrow={1}
                                        justifyContent="flex-end"
                                        sx={{
                                            py: 1,
                                            pr: 1,
                                            borderTop: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >

                                        <Button
                                            color="primary"
                                            sx={{ borderRadius: 'sm' }}
                                            onClick={onClose}
                                            type='submit'
                                        >
                                            Enregistrer
                                        </Button>
                                    </Stack>
                                }
                                sx={{
                                    '& textarea:first-of-type': {
                                        minHeight: 72,
                                    },
                                }}
                            ></Textarea>
                        </FormControl>
                    </Box>
                </Sheet >
            </>
        );
    },
);

export default CreatePrompt;