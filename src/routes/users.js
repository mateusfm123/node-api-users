import { Router } from "express";

const router = Router();

const users = [
  { id: 1, name: "Mateus" },
  { id: 2, name: "Fernanda" }
];

router.get("/", (req, res) => {
  res.json(users);
});

export default router;
