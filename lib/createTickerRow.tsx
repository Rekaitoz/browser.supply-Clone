export function createTickerRows<T>(
    data: T[],
    {
        maxRows = 3,
        itemsPerRow = 4,
        shuffle = true,
    }: {
        maxRows?: number;
        itemsPerRow?: number;
        shuffle?: boolean;
    } = {}
) {
    if (!data.length) return [];

    let items = [...data];

    // random kalau datanya banyak
    if (shuffle && items.length > maxRows * itemsPerRow) {
        items.sort(() => Math.random() - 0.5);
    }

    const totalNeeded = maxRows * itemsPerRow;

    // kalau kebanyakan cukup ambil secukupnya
    if (items.length > totalNeeded) {
        items = items.slice(0, totalNeeded);
    }

    // menentukan jumlah row
    let rowsCount = maxRows;

    if (items.length < 6) {
        rowsCount = 1;
    } else if (items.length < 12) {
        rowsCount = 2;
    }

    const rows: T[][] = [];

    let pointer = 0;

    for (let row = 0; row < rowsCount; row++) {
        const current: T[] = [];

        for (let i = 0; i < itemsPerRow; i++) {
            current.push(items[pointer % items.length]);
            pointer++;
        }

        rows.push(current);
    }

    return rows;
}