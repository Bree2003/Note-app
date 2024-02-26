export interface Note {
  id: number;
  title?: string;
  description?: string;
  isArchived?: boolean;
  createdAt?: Date;
}

export type CreateNote = Omit<Note, "id" | "createdAt">;

export type UpdateNote = Partial<CreateNote>;
