import React, { lazy, Suspense } from "react";
import { IconContext } from "react-icons";
// const IconComp = (resolver, name = 'default')=>{
//     return lazy(async () => {
//         const resolved = await resolver()
//         return {default: resolved[name]}
//     })
// }

const IconComp = ({ componentName, lib, ...props }) => {
    // if(!lib) lib = "react-icons/io5";

    let Component = lazy(() => import("react-icons/io5").then((module) => ({ default: module[componentName] })));
    
    if(lib =='ai'){
      Component = lazy(() => import(`react-icons/ai`).then((module) => ({ default: module[componentName] })));
    }if (lib === 'bs') {
      Component = lazy(() => import(`react-icons/bs`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'bi') {
      Component = lazy(() => import(`react-icons/bi`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'di') {
      Component = lazy(() => import(`react-icons/di`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'fi') {
      Component = lazy(() => import(`react-icons/fi`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'fc') {
      Component = lazy(() => import(`react-icons/fc`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'fa') {
      Component = lazy(() => import(`react-icons/fa`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'gi') {
      Component = lazy(() => import(`react-icons/gi`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'go') {
      Component = lazy(() => import(`react-icons/go`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'gr') {
      Component = lazy(() => import(`react-icons/gr`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'hi') {
      Component = lazy(() => import(`react-icons/hi`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'im') {
      Component = lazy(() => import(`react-icons/im`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'io') {
      Component = lazy(() => import(`react-icons/io`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'md') {
      Component = lazy(() => import(`react-icons/md`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'ri') {
      Component = lazy(() => import(`react-icons/ri`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'si') {
      Component = lazy(() => import(`react-icons/si`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'ti') {
      Component = lazy(() => import(`react-icons/ti`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'vsc') {
      Component = lazy(() => import(`react-icons/vsc`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'wi') {
      Component = lazy(() => import(`react-icons/wi`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'cg') {
      Component = lazy(() => import(`react-icons/cg`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'pi') {
      Component = lazy(() => import(`react-icons/pi`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'fa6') {
      Component = lazy(() => import(`react-icons/fa6`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'hi2') {
      Component = lazy(() => import(`react-icons/hi2`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'tb') {
      Component = lazy(() => import(`react-icons/tb`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'lia') {
      Component = lazy(() => import(`react-icons/lia`).then((module) => ({ default: module[componentName] })));
    } else if (lib === 'rx') {
      Component = lazy(() => import(`react-icons/rx`).then((module) => ({ default: module[componentName] })));
    }

  
  
    return (
      <Suspense fallback={<span></span>}>
        <Component {...props} />
      </Suspense>
    )
  }


export default IconComp;