export type Property = {
    [k: string]: {
        type: string,
        title: string,
    }
}

export type Schema = {
    title: string,
    description?: string,
    type: object,
    required?: [],
    properties: Property
    /*properties: {
        firstName: {
            type: "string",
            title: "First name",
        },
        lastName: {
            type: "string",
            title: "Last name",
        },
        telephone: {
            type: "string",
            title: "Telephone",
            minLength: 10,
        },
    },*/
    
}