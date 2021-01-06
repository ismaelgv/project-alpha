/** Pick random item from an array. */
export function pickRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/** Pick the given number of random items from an array. */
export async function pickRandomItems<T>(items: T[], number: number): Promise<T[]> {
  let selectedItems: T[] = [];
  for (let i = 0; i < number; i++) {
    let index: number = Math.floor(Math.random() * items.length);
    selectedItems.push(...items.splice(index, 1));
  }
  return selectedItems;
}
