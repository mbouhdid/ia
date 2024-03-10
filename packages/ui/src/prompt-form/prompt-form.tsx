'use client'
import { Alert, Button, Divider, Snackbar, Stack } from "@mui/material";
import Form from "@rjsf/mui";
import { customizeValidator } from "@rjsf/validator-ajv6";
import { MouseEventHandler, useState } from "react";
import AskResult from "./ask-result";
import { RJSFSchema } from "@rjsf/utils";
import { Box } from "@mui/joy";
import Toaster from "../toaster";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const ajvOptionsOverrides = {
    verbose: true,
    $data: true,
};
const validator = customizeValidator({ ajvOptionsOverrides });
export default function PromptFormUI({ rjsf_ui, setFormData, answer, load = false }: { rjsf_ui: any, setFormData: any, answer: string, load: boolean }) {
    const formSchema = rjsf_ui ?? undefined;
    const [alertClipboard, setAlertClipBoard] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const copyAnswer = () => {
        navigator.clipboard.writeText(answer);
        setAlertClipBoard(true);
        setTimeout(() => {
            setAlertClipBoard(false);
        }, 3000);

    }
    return (
        <>
            <Toaster color="warning" icon={<CheckCircleIcon />} open={alertClipboard} onClose={() => setOpen(false)} >Answer copied</Toaster>
            <Box
                sx={{ pb: 2, display: 'flex', alignItems: 'start', justifyContent: 'space-around', width: '100%', gap: 5 }}
            >
                <Box sx={{ width: '60%' }}>
                    <Form schema={formSchema} validator={validator} onSubmit={setFormData} />
                </Box>
                <div style={{ width: "100%" }}>
                    <AskResult result={answer} load={load} />
                    <div className="mt-1">
                        <Stack direction="row" justifyContent={"flex-end"} spacing={3}>
                            <Button type="submit" className="mt-1" onClick={copyAnswer} variant="contained">Copy</Button>
                        </Stack>
                    </div>
                </div>
            </Box>
        </>
    );
}