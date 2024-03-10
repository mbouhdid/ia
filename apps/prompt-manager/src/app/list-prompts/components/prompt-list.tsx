import { fetchPromptsList } from "@repo/request/prompt-request";
import Prompts from "./prompts";
import { Prompt } from "@/app/lib/definitions/definitions";

export default async function PromptList() {
    const prompts = await fetchPromptsList();
    const response = prompts.map((prompt: Prompt) => {
        return {
            ...prompt,
            link: `/list-prompts/${prompt.name}/edit`
        }
    })
    return (
        <Prompts list={response} />
    )
}