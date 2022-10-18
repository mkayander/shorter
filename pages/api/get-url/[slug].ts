import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@src/server/prisma";

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  console.log({ slug });

  if (!slug || typeof slug !== "string") {
    res.statusCode = 400;

    res.send({ message: "Slug is not specified! ⚠" });
    return;
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send({ message: "Slug not found!" });
    return;
  }

  return res.json(data);
};

export default getUrl;
