type Config = {
  prefix: string;
};

const generateUniqueId = ({ prefix }: Config) => {
  return prefix + "-" + Math.random().toString(36).substring(2);
};

// named exports
export { generateUniqueId };