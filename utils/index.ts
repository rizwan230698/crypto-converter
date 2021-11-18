export const truncate = (str: string | null | undefined) =>
  `${str?.slice(0, 4)}...${str?.slice(-4)}`;
