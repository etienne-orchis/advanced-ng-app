import express from 'express';

const users = ['Mystic', 'Phantom', 'Twinge', 'Molnar'];
const userRouter = express.Router();

userRouter.get('/:username', (req, res) => {
  const { username } = req.params;
  const isExistingUser = !!users.find((user) => user === username);

  res.status(200).send({ isExistingUser });
});

export default userRouter;
