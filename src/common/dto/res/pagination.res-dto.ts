type Meta = {
  limit: number;
  skip: number;
};

export class PaginationResDto<T> {
  meta: Meta;
  items: T[];

  public constructor(items: T[], meta: Meta) {
    this.items = items;
    this.meta = meta;
  }
}
