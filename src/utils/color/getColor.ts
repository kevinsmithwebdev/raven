const pastelColorPallette = [
  '#A0C4FF',
  '#FFADAD',
  '#CAFFBF',
  '#FFD6A5',
  '#BDB2FF',
  '#FDFFB6',
  '#FFC6FF',
  '#9BF6FF',
];

const colorPallette = [
  '#000080',
  '#8B0000',
  '#2F4F2F',
  '#FF8C00',
  '#800080',
  '#A52A2A',
  '#5C4033',
  '#008000',
  '#DD3333',
  '#0000FF',
  '#202020',
  '#DA70D6',
];

export const getColorMappedToIndex = (
  index: number | undefined,
  isPastel = false,
) => {
  if (index === undefined) {
    return isPastel ? '#aaa' : '#000';
  }

  if (isPastel) {
    return pastelColorPallette[index % pastelColorPallette.length];
  }

  return colorPallette[index % colorPallette.length];
};
