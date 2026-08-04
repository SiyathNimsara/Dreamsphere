export function formatFrequency(hz) {
  return `${hz} Hz`;
}

export function truncateText(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function formatDate(dateString) {
  return dateString;
}
