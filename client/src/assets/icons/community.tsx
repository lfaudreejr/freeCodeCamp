import React from 'react';
function CommunityIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      viewBox='0 0 60 60'
      fill='none'
      {...props}
    >
      <path
        d='M18.1176 7.11765C18.1176 11.0486 14.9309 14.2353 10.9999 14.2353C7.06896 14.2353 3.88228 11.0486 3.88228 7.11765C3.88228 3.18668 7.06896 0 10.9999 0C14.9309 0 18.1176 3.18668 18.1176 7.11765Z'
        fill='black'
      />
      <path
        d='M48.9999 14.2353C52.9309 14.2353 56.1176 11.0486 56.1176 7.11765C56.1176 3.18668 52.9309 0 48.9999 0C45.069 0 41.8823 3.18668 41.8823 7.11765C41.8823 11.0486 45.069 14.2353 48.9999 14.2353Z'
        fill='black'
      />
      <path
        d='M13 47H0V21.3531C-1.63171e-05 17.8904 2.69272 15.6097 5 14C6.94118 15.4503 8.44322 16 10.9999 16C13.5566 16 15.0588 15.2941 17 14C17.857 14.5978 18.615 14.9334 19.4511 15.814C19.1576 16.8238 19 17.8932 19 19C19 21.574 19.8523 24.0831 21.2851 26.1359C17.7193 28.6696 13 33.1608 13 38.6113V47Z'
        fill='black'
      />
      <path
        d='M40.5488 15.814C41.385 14.9334 42.143 14.5979 43 14C44.9412 15.4503 46.4433 16 49 16C51.5567 16 53.0588 15.2941 55 14C57.3073 15.6097 60 17.8904 60 21.3531V47H47V38.6113C47 33.1608 42.2807 28.6696 38.7149 26.1359C40.1477 24.0831 41 21.574 41 19C41 17.8932 40.8424 16.8238 40.5488 15.814Z'
        fill='black'
      />
      <path
        d='M39.5 19.1851C39.5 24.8102 35.3604 29 29.9999 29C24.6395 29 21 24.8102 21 19.1851C21 13.56 24.6395 10 29.9999 10C35.3604 10 39.5 13.56 39.5 19.1851Z'
        fill='black'
      />
      <path
        d='M15 39.5558C15 34.6007 19.3537 30.3034 22.5 28C25.1471 30.0753 26.5135 31 29.9999 31C33.4863 31 35.3529 29.8518 38 28C41.1463 30.3034 45 34.6007 45 39.5558C45 54.3705 45 60 45 60H15C15 60 15.0001 55.2965 15 39.5558Z'
        fill='black'
      />
    </svg>
  );
}

CommunityIcon.displayName = 'CommunityIcon';

export default CommunityIcon;
