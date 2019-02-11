export class Category {
  id: number;
  name: string;
}

export class Tag {
  id: number;
  name: string;
}

export class Pet {
  id: number = 0;
  category: Category = { id: 0, name: "" };
  name: string = "";
  photoUrls: string[];
  tags: Tag[] = [];
  status: string = "";
}
