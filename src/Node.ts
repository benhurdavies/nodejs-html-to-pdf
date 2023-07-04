export class Node {
  constructor(
    public readonly name: string,
    public attributes?: Attributes,
    public children: (Node | string)[] = [],
    public parent: Node | undefined = undefined
  ) {}
}

export interface Attributes {
  [key: string]: string;
}
