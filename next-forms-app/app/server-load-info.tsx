import { sql } from "@vercel/postgres";

export async function ServerMoreInfo({ id }: { id: string }) {
  const result = await sql`
      SELECT * FROM todos
    `;

  return <div>{JSON.stringify(result)}</div>;
}
