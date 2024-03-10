import { Prompt } from "next/font/google"

export type Prompt = {
    name: string,
    template?: string
}

export type PromptView = {
    link: string
} & Prompt