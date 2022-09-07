import { NavigationDots } from '../components';
import styles from '../style';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`w-full min-h-screen flex flex-row ${classNames}`}>
        <div className={idName === 'home' ? 'flex justify-center items-center flex-1 w-full flex-col p-0' : 'flex justify-center items-center flex-1 w-full flex-col pt-[4rem] px-[1rem] pb-[2rem] xs:py-[4rem] xs:px-[2rem]'}>
            <Component />
        </div>

        <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;