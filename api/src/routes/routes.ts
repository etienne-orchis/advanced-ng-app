import express from 'express';
import userRouter from './userRouter';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, API!');
});
router.use('/user', userRouter);

export default router;
