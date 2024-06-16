export class StringCleaner{
    public static clean_a_filename(name: string): string {
        return name.replace(/[^a-zA-Z0-9.]/g, "_");
    }
}