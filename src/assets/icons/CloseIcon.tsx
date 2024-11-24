import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIcon = () => {
  return (
    <Svg
      id="Layer_1"
      testID="close-icon"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      viewBox="0 0 122.88 122.88">
      <Path
        d="M61.44 0A61.44 61.44 0 110 61.44 61.44 61.44 0 0161.44 0zm13.14 36.8c1.74-1.77 2.83-3.18 5-1l7 7.13c2.29 2.26 2.17 3.58 0 5.69L73.33 61.83l12.75 12.75c1.77 1.74 3.18 2.83 1 5l-7.13 7c-2.26 2.29-3.58 2.17-5.68 0L61.44 73.72 48.63 86.53c-2.1 2.15-3.42 2.27-5.68 0l-7.13-7c-2.2-2.15-.79-3.24 1-5l12.73-12.7-13.2-13.19c-2.15-2.11-2.27-3.43 0-5.69l7-7.13c2.15-2.2 3.24-.79 5 1l13.09 13.12L74.58 36.8z"
        fill="#f44336"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default CloseIcon;
