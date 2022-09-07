const styles = {
    flexCenter: `flex justify-center items-center`,
    pText: `text-sm text-left text-primary leading-6 2xl:text-2xl`,
    headText: `text-3xl xs:text-4xl font-extrabold text-center text-primary capitalize 2xl:text-6xl`,
    boldText: `text-base font-extrabold text-left text-primary 2xl:text-3xl`,

    copyright: `w-full p-[2rem] xs:pt-[2rem] xs:px-0 xs:pb-0 flex flex-col justify-end items-end`,

    // Navigation Dots
    navigation: `hidden sm:flex justify-center items-center flex-col p-[1rem]`,
    navigationDot: `h-[10px] w-[10px] rounded-[50%] m-[0.5rem] bg-secondary 2xl:w-[20px] 2xl:h-[20px] transition ease-in-out duration-300 hover:bg-primAccent focus:bg-primAccent`,

    // Navbar
    navbar: `w-full flex justify-between items-center py-[1rem] px-[2rem] bg-dimBlack backdrop-blur-2xl border-b border-dimPrimAccent fixed z-50`,
    navbarLogo: `flex justify-start items-center`,
    navbarLinks: `hidden lg:flex-1 lg:flex lg:justify-center lg:items-center lg:list-none mr-[8rem] 2xl:mr-[14rem]`,
    navbarMenuContainer: `w-[35px] h-[35px] rounded-[50%] relative flex justify-center items-center bg-primAccent lg:hidden`,
    navbarMenu: `fixed inset-y-0 right-0 z-70 p-[1rem] w-4/5 h-screen flex justify-end items-end flex-col bg-black shadow-[0_0px_20px_0px_rgba(0,195,154,0.3)]`,
    navbarMenuLinks: `list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col`,

    // Header    
    header: `relative flex-1 w-full flex-col h-full pt-[6rem] px-[2rem] pb-0 2xl:pt-[8rem] xl:flex-row xs:px-[1rem] xs:pb-[2rem]`,
    headerInfo: `flex-[0.67] xl:flex-1 flex  flex-col items-start w-full h-full my-0 mr-0 ml-[2rem] xl:w-auto`,
    title: `h-full py-[1rem] lg:ml-[4rem] flex justify-center items-center xs:items-start mr-[4rem] xs:mr-0 flex-col w-auto`,
    portfolioBtn: `w-1/2 py-[1rem] px-[2rem] rounded-[10px] border-none bg-primAccent  text-secondary text-center outline-none mt-[2rem] mx-0 mb-[2rem] cursor-pointer transtion btn-trans duration-300 hover:bg-secAccent hover:text-primary`,
    headerCircles: `flex-[0.5] hidden md:flex mb-[2rem]  xl:flex-col flex-wrap mr-[8rem] justify-evenly items-end h-full w-full xl:ml-[1rem] xl:w-auto`,

    // Skills
    skills: `flex justify-center items-start flex-wrap mt-[2rem]`,
    skillItem: `w-[270px] bg-secondary flex justify-start items-start flex-col p-[1.5rem] m-[2rem] rounded-2xl 2xl:w-[370px] 2xl:my-[2rem] 2xl:mx-[4rem] hover:border hover:border-primAccent`,

    // Projects
    projectFilter: `flex flex-row justify-start items-center flex-wrap mt-[4rem] mx-[0rem] mb-[2rem]`,
    projectFilterItem: `py-[0.5rem] px-[1rem] m-[0.5rem] rounded-[0.5rem] text-primary font-extrabold cursor-pointer transition-all ease-in duration-300 hover:bg-primAccent hover:text-secondary 2xl:py-[1rem] 2xl:px-[2rem] 2xl:rounded-[0.85rem]`,
    itemActive: `bg-primAccent text-secondary`,
    projectPortfolio: `flex flex-wrap justify-center items-center`,
    projectItem: `w-[270px] flex-col m-[2rem] p-[1.5rem] rounded-[0.5rem] bg-secondary  text-primary cursor-pointer transition-all ease-in duration-300 transition-all ease-in-out duration-300 border border-transparent hover:border-primAccent 2xl:w-[470px] 2xl:min-h-[600px] 2xl:p-[2.25rem] 2xl:rounded-[0.75rem]`,
    projectImg: `w-full h-[230px] relative 2xl:h-[350px]`,
    projectHover: `absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-[0.5rem] opacity-0 transition-all ease-in duration-300`,
    projectContent: `p-[0.5rem] w-full relative flex-col`,
    projectTag: `absolute py-[0.5rem] px-[1rem] rounded-[10px] bg-secondary top-[-25px]`,

    // Footer
    footerForm: ` w-full flex-col my-[1rem] mx-0 md:w-3/5 md:mx-[2rem]`,
    footerButton: `py-[1rem] px-[2rem] rounded-[10px] border-none bg-primAccent font-medium text-secondary outline-none mt-[2rem] mx-0 mb-0 cursor-pointer transtion btn-trans duration-300 hover:bg-secAccent hover:text-primary`
};

export default styles;