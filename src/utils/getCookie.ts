export function getCookie(name: string): boolean {
  const match = new RegExp(`(^| )${name}=([^;]+)`).exec(document.cookie);
  if (match) return !!match[2];
  return false;
}
