
import { fetchPromptByName } from "@/app/lib/services/request-service/prompts-request-service";
import Header from "@/app/ui/header";
import PromptForm from "@/app/ui/prompt-form";
import { Button } from "@mui/joy";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { deletePrompt } from "@repo/request/prompt-request";
import React, { useState } from "react";
import Delete from "./delete";
import CreatePrompt from "../../../components/create-prompt";
import Update from "./update";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const promptEditor = await fetchPromptByName(id);

    return (
        <>
            <Header title={params.id} actions={
                <>
                    <Update prompt={promptEditor.prompt} />

                    <Delete id={id} />

                </>
            } />
            <PromptForm promptEditor={promptEditor} />
        </>
    );
}