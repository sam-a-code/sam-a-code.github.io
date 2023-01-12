import Bio from './Bio';
import JobCardContainer from "./JobCardContainer";
import EducationCardContainer from './EducationCardContainer';
import HomePageProjects from './HomePageProjects';


function Home() {
    return (
        <>
            <Bio />
            <JobCardContainer />
            <EducationCardContainer />
            <HomePageProjects />
        </>

    );
  }

  export default Home;
