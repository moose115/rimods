type Tag = {
  name: string;
  type: string;
};

type ModType = {
  name: string;
  images: string[];
  description: string;
  tags: Tag[];
  workshopLink: string;
  ludeonLink: string;
  timestampAdd: string | number;
  timestampUpdate?: string | number;
};

export default ModType;
