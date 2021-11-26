export function greeting(): string {
  const time = new Date().getHours();
  if (time >= 22) return 'Good night!';
  if (time >= 18) return 'Good evening!';
  if (time >= 12) return 'Good afternoon!';
  return 'Good morning!';
}
