export function safeParse(data: any) {
    try {
        return JSON.parse(data);
    }
    catch(err) {
        return "";
    }
}

export function deepCopy<T>(data: T): T {
    try {
        return JSON.parse(JSON.stringify(data));
    }
    catch(err) {
        throw err;
    }
}

export function handleStringParam(value: any): string {
    if(value && typeof value === "string") return value;
    else return "";
}