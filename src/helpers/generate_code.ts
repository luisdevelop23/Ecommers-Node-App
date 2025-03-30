import { Repository } from "typeorm";

export async function generateCode(
  repo: Repository<any>, 
  prefix: string,
  column: string = "code" 
): Promise<string> {
 
  const count = await repo.count();
  if (count === 0) {
    return `${prefix}001`;
  }

  const lastItem = await repo.find({
    order: { [column]: "DESC" },
    select: [column],
    take: 1,
  });

  const lastCode = lastItem[0]?.[column];

  if (!lastItem.length || !lastItem[0][column]) {
    return `${prefix}001`;
  }

  const lastCodeNumber = parseInt(lastItem[0][column].substring(prefix.length), 10) + 1;

  return `${prefix}${String(lastCodeNumber).padStart(3, "0")}`;
}
