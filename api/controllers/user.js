import { db } from "../db.js";

export const getUser = async (req, res) => {
  const q = `
  SELECT * FROM testbed.users;
  `;

  db.query(q, req.query, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
