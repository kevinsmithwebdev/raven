import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface FilterIconProps {
  isDirty: boolean;
}

const FilterIcon = ({isDirty}: FilterIconProps) => {
  return (
    <Svg
      fill="#000"
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300.906 300.906">
      <Path d="M288.953 0h-277c-5.522 0-10 4.478-10 10v49.531c0 5.522 4.478 10 10 10h12.372l91.378 107.397v113.978a10 10 0 0015.547 8.32l49.5-33a9.999 9.999 0 004.453-8.32v-80.978l91.378-107.397h12.372c5.522 0 10-4.478 10-10V10c0-5.522-4.477-10-10-10zM167.587 166.77a9.999 9.999 0 00-2.384 6.48v79.305l-29.5 19.666V173.25a9.997 9.997 0 00-2.384-6.48L50.585 69.531h199.736l-82.734 97.239zM278.953 49.531h-257V20h257v29.531z" />
      {isDirty && (
        <Circle
          fill="#246BCE"
          stroke="#246BCE"
          stroke-width="10"
          fill-opacity=".5"
          cx="210"
          cy="85"
          r="64"
        />
      )}
    </Svg>
  );
};

export default FilterIcon;
