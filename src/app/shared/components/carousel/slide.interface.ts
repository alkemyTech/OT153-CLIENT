export interface Slide {
    id?: string;
    name: string,
    description: string,
    image: string,
    order: number,
    user_id: string,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
}