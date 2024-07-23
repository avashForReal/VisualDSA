import { Request, Response } from 'express';
import { bubbleSort } from '../../services/sorting/bubbleSort';

const sort = (req: Request, res: Response) => {
  const reqData = req.body as {
    input: number[];
    order: 'asc' | 'dsc';
  };
  const sortedArray = bubbleSort(reqData.input, reqData.order);
  return res.status(200).json({
    output: sortedArray,
  });
};

export default {
  sort,
};
