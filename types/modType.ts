type Author = {
  name: string;
  url: string;
};

type ModType = {
  id: string;
  title: string;
  authors: Author[];
  tags: string[];
  rating: number;
  steamSubscribersCount: number;
  steamRatingsCount: number;
  thumbnailUrl: string;
  workshopUrl: string;
};

export default ModType;
