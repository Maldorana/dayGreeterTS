export function greeting(): string {
  if (new Date().getHours() > 12) return 'Good afternoon!';
  return 'Good morning!';
}
