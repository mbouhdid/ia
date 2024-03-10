


import { Button } from "@mui/joy";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { deletePrompt, fetchPromptByName } from "@repo/request/prompt-request";
import React, { useState } from "react";
import Delete from "./delete";
import CreatePrompt from "../../../components/create-prompt";
import Update from "./update";
import Header from "../../../../ui/header";
import PromptForm from "../../../../ui/prompt-form";


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