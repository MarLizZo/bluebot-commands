export interface CommandItem {
    id: number;
    view_order: number;
    command: string;
    description: string;
    permissions: string;
    synthax?: string;
}