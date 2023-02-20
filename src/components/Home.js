import Bio from './Bio';
import JobCardContainer from "./JobCardContainer";
import EducationCardContainer from './EducationCardContainer';
import HomePageProjects from './HomePageProjects';


function Home() {
    return (
        <>
            <Bio />
            <HomePageProjects />
            <JobCardContainer />
            <EducationCardContainer />
        </>

    );
  }

  export default Home;
