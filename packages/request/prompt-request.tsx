import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { Prompt } from './definitions/definitions';
import { redirect } from "next/navigation";


//const API_URL = 'https://protide.fr/raglab';
const API_URL = 'http://localhost:3100/api';

export async function fetchPromptsList(): Promise<Prompt[]> {
    noStore();
    try {
        const prompts = await fetch(`${API_URL}/prompt`, {
            headers: {
                API_TOKEN: 'test_token'
            }
        });
        return prompts.json();
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}

export async function fetchPromptByName(name: string): Promise<{ prompt: Prompt, rjsf_ui: any }> {
    noStore();
    try {
        const prompt = await fetch(`${API_URL}/prompt/editor?name=${name}`, {
            headers: {
                API_TOKEN: 'test_token'
            }
        });
        return prompt.json();
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}

export async function updatePrompt(p: Prompt): Promise<{ prompt: Prompt, rjsf_ui: any }> {
    noStore();
    try {
        const prompt = await fetch(`${API_URL}/prompt/editor`, {
            headers: {
                API_TOKEN: 'test_token'
            },
            method: 'POST',
            body: JSON.stringify(p)
        });

        return prompt.json();
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}

export async function createPrompt(p: string): Promise<Prompt> {
    noStore();
    try {
        const prompt = await fetch(`${API_URL}/prompt/creator`, {
            headers: {
                API_TOKEN: 'test_token'
            },
            method: 'PUT',
            body: JSON.stringify(p)
        });

        return prompt.json();
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}

export async function deletePrompt(names: string[]) {
    noStore();
    try {
        const prompt = await fetch(`${API_URL}/prompt/editor`, {
            headers: {
                API_TOKEN: 'test_token'
            },
            method: 'DELETE',
            body: JSON.stringify(names)
        });

    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}

export async function askChat(template: string, parameters: string[]): Promise<{ answer: string }> {
    noStore();
    const params = parameters.filter((value) => value != null);
    try {
        const prompt = await fetch(`${API_URL}/prompt/editor/ask`, {
            headers: {
                API_TOKEN: 'test_token'
            },
            method: 'POST',
            body: JSON.stringify({ template, parameters: params.length > 0 ? params : [""] })
        });
        console.log('parameters', parameters)
        return prompt.json();
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}