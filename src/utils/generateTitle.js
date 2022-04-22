const shortenTitle = (text) => {
  if (typeof text !== 'string') return '';
  if (text.length < 13) return text;

  return `${text.slice(0, 13)}...`;
};

export default shortenTitle;
