export function getCookie(name: string): string {
  const match = new RegExp(`(^| )${name}=([^;]+)`).exec(document.cookie);
  if (match) return match[2];
  return '';
}
