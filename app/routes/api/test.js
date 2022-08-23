import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  return json(
    {
      name: "Test User",
    },
    200
  );
};
