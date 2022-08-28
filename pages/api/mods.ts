import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../db';

interface QueryParams {
  sort?: string;
  order?: string;
  tags?: string;
  page?: string;
  limit?: string;
  title?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await client.connect();
  const collection = client.db('rimods').collection('mods');
  // get sort type, sort direction, and tags from query string
  const {
    sort, order, tags, limit, page, title,
  } = req.query as QueryParams;

  const query = {} as any;
  if (tags) {
    query.tags = { $in: tags.split(',') };
  }
  if (title) {
    query.title = { $regex: title.split(' ').join('|'), $options: 'i' };
  }

  let skip = 0;
  if (page && limit) {
    skip = (parseInt(page, 10)) * parseInt(limit, 10);
  }

  // get all mods
  const mods = await collection
    .find(query)
    .sort(sort || 'steamSubscribersCount', order === 'asc' ? 1 : -1)
    .skip(skip)
    .limit(parseInt(limit, 10) || 20)
    .toArray();

  const modsCount = await collection.countDocuments(query);

  // cache for 3 hours in browser
  res.setHeader('Cache-Control', 's-maxage=10800, stale-while-revalidate');

  res.status(200).json({
    mods,
    count: modsCount,
  });
  await client.close();
};
