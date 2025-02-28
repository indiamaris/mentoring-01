
import { Home } from '../views/home/home';
import { SyllabusCss } from '../views/css/syllabus-css/SyllabusCss';
import { PositionCss } from '../views/css/position-css/PositionCss';

  export const routes = [  {
        path: '/',
        element:<Home/>
  },
        {
        path: '/css',
              element: <SyllabusCss />,
              children: [

                    {
        path: 'position',
        element:<PositionCss/>
  },
           
     ]
    },
    // {
    //     path: '/use-effect-lesson',
    //  element:<UseEffectLesson/>
    // },
    



]