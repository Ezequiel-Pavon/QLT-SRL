// src/lib/types.ts
export interface ServiceProps {
  title: string;
  description: string;
  details: string;
  image: string;
  pro: ProServiceType;
  gallery: string[];
}

export const ProService = { YES: 1, NO: 0 } as const;

type ProServiceType = typeof ProService[keyof typeof ProService];