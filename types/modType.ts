type ModType = {
  name: string;
  images: string[];
  description: string;
  tags: string[];
  workshopLink: string;
  ludeonLink: string;
  timestampAdd: string | number;
  timestampUpdate?: string | number;
};

export default ModType;
