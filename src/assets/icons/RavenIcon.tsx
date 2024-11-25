import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RavenIcon = () => (
  <Svg
    testID="raven-icon"
    fill="#000"
    height="24px"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 360.416 360.416">
    <Path d="M358.952 150.509c2.597-11.582 1.212-22.53-.127-33.119-1.144-9.042-2.223-17.581-.591-25.51 3.869-18.796-8.128-39.427-19.013-55.301-12.143-17.708-25.283-20.22-42.522-21.836a30.567 30.567 0 00-2.829-.132c-11.568 0-21.231 6.474-26.423 9.952-1.347.902-2.739 1.835-3.147 1.917-.646.129-2.158.149-4.071.175-5.138.068-13.736.183-23.974 2.376-9.976 2.138-17.97 7.219-17.821 11.327.056 1.556 1.194 3.561 6.298 4.274 10.694 1.495 20.149 4.392 27.746 6.719 1.502.46 2.911.892 4.218 1.277 8.22 2.426 15.813 5.741 18.413 19.486 1.809 9.558-14.625 20.525-29.123 30.202-6.014 4.013-11.693 7.804-16.268 11.521-15.954 12.963-46.374 39.235-56.119 48.467-9.237 8.751-86.918 62.013-107.799 72.199-21.338 10.409-42.134 26.726-47.345 37.147-1.168 2.336-1.418 3.816-.812 4.797.265.428.812.938 1.915.938 1.313 0 3.111-.757 4.662-1.491.002.188.037.381.119.578.463 1.119 1.955 1.262 3.203 1.262 3.411 0 10.521-1.401 19.192-3.771-3.114 2.302-9.293 6.265-14.915 9.871C9.595 298.094-.274 305.019.006 308.368c.154 1.855 1.38 4.066 6.345 4.066 3.048 0 6.762-.783 9.747-1.412 1.549-.326 2.891-.609 3.818-.717-.338.709-1.205 1.928-1.82 2.794-1.992 2.802-4.052 5.7-2.585 7.534.44.551 1.189.819 2.287.819 3.285 0 10.301-2.437 17.086-4.794 4.844-1.683 9.419-3.272 12.184-3.825 4.222-.844 24.688-11.443 44.479-21.693 14.766-7.647 31.502-16.314 33.303-16.512 3.507 0 31.84-2.067 49.711-7.174 3.983-1.138 8.238-1.715 12.647-1.715 10.719 0 21.066 3.333 29.931 6.643-.055 2.158-.109 4.802-.165 8.048-.151 8.905-.218 18.128-.196 20.565.029 3.404 6.457 9.411 15.534 17.525 3.734 3.338 8.317 7.436 9.159 8.91-1.521.946-3.853.974-6.745 1.009-5.052.061-11.97.144-19.146 5.616-4.179 3.187-6.942 7.744-7.569 9.963-.059.205-.234.828.152 1.339.215.283.545.446.906.446.301 0 .604-.112.93-.342l.737-.527c2.341-1.677 7.822-5.605 10.766-6.725 3.979-1.514 6.902-2.131 10.092-2.131 4.188 0 9.138 1.076 16.806 3.063 4.696 1.216 8.705 1.808 12.256 1.808 4.619 0 7.973-.978 11.523-2.013 4.131-1.204 8.401-2.449 15.383-2.449 1.297 0 2.665.044 4.067.132 7.649.479 14.502 4.462 17.796 6.376 1.418.824 1.847 1.073 2.311 1.073l.706-.028.265-.59c.347-.771-.089-1.261-2.182-3.619-3.516-3.959-6.806-6.381-9.986-7.947 1.944-.378 3.739-.896 5.584-1.434 4.131-1.204 8.401-2.449 15.382-2.449 1.297 0 2.665.044 4.067.132 7.649.479 14.503 4.462 17.796 6.375 1.419.825 1.848 1.073 2.312 1.073l.706-.028.265-.59c.347-.771-.089-1.261-2.182-3.619-7.444-8.383-13.889-9.927-20.382-10.875-2.55-.371-4.478-1.228-4.688-2.082-.173-.699.774-1.882 2.534-3.164 3.122-2.274 6.262-3.427 9.333-3.427 5.441 0 8.826 3.572 9.194 4.93.166.616.653.834 1.021.834.375 0 .87-.228 1.03-.868.301-1.196-.06-6.437-4.487-8.808-2.211-1.185-5.633-1.837-9.636-1.837-9.456 0-19.744 3.326-28.221 9.011-1.689-.342-3.622-.526-5.722-.526-.583 0-1.17.018-1.758.043-7.241-5.788-19.983-19.26-20.717-23.842-.483-3.021-.765-12.566-.765-21.797v-.103c6-2.984 12.091-6.5 19.155-10.656 35.36-20.796 63.799-86.286 68.592-107.668zM250.816 278.882c-.079 6.328-.111 11.825-.095 13.628.03 3.403 6.457 9.41 15.533 17.524 3.53 3.155 7.813 6.985 8.984 8.641-.794.338-1.582.693-2.362 1.069-1.208.168-2.619.19-4.206.209-3.271.04-7.325.098-11.724 1.612-7.352-6.351-18.116-18.122-18.793-22.343-.366-2.289-.5-8.327-.576-15.135 2.92-1.001 7.269-2.596 13.239-5.205z" />
  </Svg>
);

export default RavenIcon;
