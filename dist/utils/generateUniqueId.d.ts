declare type Config = {
    prefix: string;
};
declare const generateUniqueId: ({ prefix }: Config) => string;
export { generateUniqueId };
