'use client';
import { Divider } from "@mui/material";
import { Prompt } from "../lib/definitions/definitions";
import { useFormState } from "react-dom";
import { savePrompt } from "../lib/services/prompts-service";

import { useState } from "react";
import PromptFormUI from "@repo/ui/prompt-form";
import { askChat } from "@repo/request/prompt-request";
import { Box, Typography } from "@mui/joy";


export default function PromptForm({ promptEditor }: { promptEditor: { prompt: Prompt, rjsf_ui: any } }) {
    const initialState = { message: null, errors: {} };
    const updatePromptWithId = savePrompt.bind(null, promptEditor.prompt);

    const prompt = promptEditor.prompt;
    const [answer, setAnswer] = useState('');
    const [loadingAnswer, setLoadingAnswer] = useState(false);

    const onSubmit = async (data: any) => {
        setLoadingAnswer(true);
        const response = await askChat(prompt.template as string, data);
        setAnswer(response.answer)
        setLoadingAnswer(false);
    }

    return (
        <>
            <Box
                sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'start' }}
            >
                <Typography level="body-sm" mb={2}>{prompt.template}</Typography>
                <Divider sx={{ width: '100%' }} />
            </Box>
            {promptEditor.rjsf_ui != null &&
                <PromptFormUI
                    rjsf_ui={promptEditor.rjsf_ui} setFormData={(data: any) => onSubmit(Object.values(data.formData) ?? [])}
                    answer={answer}
                    load={loadingAnswer} />
            }
        </>
    );
}