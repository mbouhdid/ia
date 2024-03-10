'use server'
import { Prompt, PromptView } from "../definitions/definitions";
import { Schema, z } from 'zod';
import { createPrompt, updatePrompt } from "./request-service/prompts-request-service";
import { deletePrompt, fetchPromptsList } from "@repo/request/prompt-request";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PromptFormSchema = z.object({
    id: z.string(),
    name: z.string(),
    template: z.string({
        invalid_type_error: 'Content can not be empty'
    })
})

const UpdatePrompt = PromptFormSchema.omit({id: true, name: true});

const CreatePrompt = PromptFormSchema.omit({id: true,});

export type State = {
    errors?: {
        template?: string[];
    };
    message?: string | null;
    prompt?: Prompt;
    rjsf_ui?: Schema
};

export async function savePrompt(prompt: Prompt, prevState: State, formData: FormData) {
    const validatedFields = UpdatePrompt.safeParse({
        template: formData.get('template')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'invalid prompt update'
        }
    }

    const {template} = validatedFields.data;
    prompt.template = template;

    try {
        const update = await updatePrompt(prompt);
        
        prevState.prompt = update.prompt;
        prevState.rjsf_ui = update.rjsf_ui;
        return prevState;
    } catch(e) {
        return {
            message: 'error'
        }
    }
}

export async function createTemplate(prevState: State, formData: FormData) {
    
    const validatedFields = CreatePrompt.safeParse({
        template: formData.get('template'),
        name: formData.get('name')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'invalid prompt update'
        }
    }

    const {template, name} = validatedFields.data;
    const update = await updatePrompt({name, template});
    prevState = update;
    revalidatePath(`/list-prompts/${update.prompt.name}/edit`);
    redirect(`/list-prompts/${update.prompt.name}/edit`);
    return prevState;
    
}

export async function deleteTemplate(prevState: State, id: string[]) {
    try {
        await deletePrompt(id);
    } catch(e) {
        return {
            message: 'error'
        }
    }
    const list = await fetchPromptsList();
    
    revalidatePath(`/list-prompts/${list[0]?.name}/edit`);
    redirect(`/list-prompts/${list[0]?.name}/edit`);
}
