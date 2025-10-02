export interface CharacterRepository {
    getById(id: string): Promise<unknown | null>;
    getAll(): Promise<unknown[]>;
}