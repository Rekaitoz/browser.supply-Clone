export function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()

        // apostrophe
        .replace(/'/g, "")

        // semua karakter selain huruf, angka, (), dan -
        .replace(/[^a-z0-9()\s-]/g, "")

        // spasi -> -
        .replace(/\s+/g, "-")

        // multiple -
        .replace(/-+/g, "-");
}