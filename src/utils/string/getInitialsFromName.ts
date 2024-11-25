const honorifics = ['mrs', 'mrs.', 'mr', 'mr.', 'miss'];

export const getInitialsFromName = (name: string | undefined) => {
  if (!name) {
    return 'N/A';
  }

  const names = name.split(' ');

  if (honorifics.includes(names[0].toLowerCase())) {
    names.shift();
  }

  if (names.length === 0) {
    return 'N/A';
  }

  const initials =
    names.length === 1 ? names[0].slice(0, 2) : `${names[0][0]}${names[1][0]}`;

  return initials.toLocaleUpperCase();
};
