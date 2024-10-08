export const copyToClipboard = () => {
  const link = window.location.href;
  navigator.clipboard.writeText(link);
};
