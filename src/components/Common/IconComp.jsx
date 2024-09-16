import React, { lazy, Suspense } from "react";
// const IconComp = (resolver, name = 'default')=>{
//     return lazy(async () => {
//         const resolved = await resolver()
//         return {default: resolved[name]}
//     })
// }

const IconComp = ({ componentName, ...props }) => {
    const Component = lazy(() => import('react-icons/io5').then((module) => ({ default: module[componentName] })))
  
    return (
      <Suspense fallback={<span></span>}>
        <Component {...props} />
      </Suspense>
    )
  }


export default IconComp;