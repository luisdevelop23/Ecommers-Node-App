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

  const lastItem = await repo.findOne({
    order: { [column]: "DESC" },
    select: [column],
  });

  if (!lastItem || !lastItem[column]) {
    return `${prefix}001`; 
  }

  const lastCodeNumber = parseInt(lastItem[column].substring(1), 10) + 1;

  return `${prefix}${String(lastCodeNumber).padStart(3, "0")}`;
}
