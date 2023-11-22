
const getEnv = (key: string, required: boolean) => {
    const value = (window as any).env[key];

    if (required && typeof value === "undefined")
        throw new Error(`Required env ${key} is undefined.`);

    return value;
};

export const getStringEnv = (key: string, required: boolean = true) =>
    `${getEnv(key, required)}`;


export const ENV = {
    API_SERVER: getStringEnv("apiServer"),
} as const;
