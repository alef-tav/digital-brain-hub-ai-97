
export interface Tool {
  title: string;
  description: string;
  detailedDescription?: string;
  icon: string;
  image?: string;
  link?: string;
  isNew?: boolean;
}

export interface Category {
  title: string;
  tools: Tool[];
}
