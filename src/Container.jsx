import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ShowCase from  './components/pages/showcase/showcase';
import About from './components/pages/about/about';
import ExploreLanding from './components/pages/explore/explore_landing';
import Divisions from './components/pages/explore/divisions/divisions';
import NKWDetail from './components/pages/explore/divisions/nkwDetail/nkwDetail';
import ExpacDetail from './components/pages/explore/divisions/expacDetail/expacDetail';
import QPSDetail from './components/pages/explore/divisions/qpsDetail/qpsDetail';
import HiddenValleyDetail from './components/pages/explore/divisions/hiddenValleyDetail/hiddenValleyDetail';
import NkwCateringDetail from './components/pages/explore/divisions/nkwCateringDetail/nkwCateringDetail';
import MountainCoffeeRoastersDetails from './components/pages/explore/divisions/mountainCoffeeRoastersDetails/mountainCoffeeRoastersDetails';
import PngCommercialVehiclesDetail from './components/pages/explore/divisions/pngCommercialVehiclesDetail/pngCommercialVehiclesDetail';
import AllPowerServiceDetail from './components/pages/explore/divisions/allPowerServiceDetail/allPowerServiceDetail';
import JetSmartDetail from './components/pages/explore/divisions/jetSmartDetail/jetSmartDetail';
import MotoTrainingDetail from './components/pages/explore/divisions/mtoTrainingDetail/motoTrainingDetail';
import PacificCargoService from './components/pages/explore/divisions/pacificCargoService/pacificCargoService';
import NkwBuildingDetail from './components/pages/explore/divisions/nkwBuilding/nkwBuildingDetail';
import Construction from './components/pages/explore/construction/construction';
import Catering from './components/pages/explore/catering/catering';
import Logistics from './components/pages/explore/logistics/logistics';
import NKWFresh from './components/pages/explore/nkwFresh/nkwFresh';
import Procure from './components/pages/explore/procure/procure';
import TrainingService from './components/pages/explore/training_service/training_service';
import CampManagement from './components/pages/explore/camp_management/camp_management';
import Contact from './components/pages/contact/contact';
import OurTeam from './components/pages/ourteam/ourteam';
import NkwVideo from "./components/pages/about/nkwVideos";
import HVCDetail from "./components/pages/explore/divisions/hvcDetail/hvcDetail";

function Container({ location }) {

//   if (location.pathname !== '/') {
//     setTimeout(() => {
      
//       window.location.replace("http://localhost:3001/");


//       console.log('This is will run after 60 second')
//   }, 30000)
// }


  return (
    <Wrapper>    
        
      
      <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{ enter: 2200, exit: 2000 }}
            classNames={'fade'}
          >
        <Switch  location={location}>
            <Route exact path='/' component={ShowCase} />

            <Route  exactly  path='/about' component={About} /> 
            <Route  exact  path='/contact' component={Contact} /> 
            <Route  exact path='/explore' component={ExploreLanding} /> 
            <Route  exact  path='/ourteam' component={OurTeam} />
            <Route  exact  path='/videos' component={NkwVideo} />

            <Route  exact path='/explore/divisions' component={Divisions} />
            <Route  exact path='/explore/construction' component={Construction} />
            <Route  exact path='/explore/catering' component={Catering} /> 
            <Route  exact path='/explore/logistics' component={Logistics} />
            <Route  exact path='/explore/procure' component={Procure} />
            <Route  exact path='/explore/nkwfresh' component={NKWFresh} />
            <Route  exact path='/explore/trainingservice' component={TrainingService} />
            <Route  exact path='/explore/campmanagement' component={CampManagement} />


            <Route exact path='/explore/divisions/nkwdetail' component={NKWDetail} />
            <Route exact path='/explore/divisions/expacdetail' component={ExpacDetail}/>
            <Route exact path='/explore/divisions/qpsdetail' component={QPSDetail}/>
            <Route exact path='/explore/divisions/hiddenvalley' component={HiddenValleyDetail} />
            <Route exact path='/explore/divisions/nkwcatering' component={NkwCateringDetail} />
            <Route exact path='/explore/divisions/mountaincoffeeroasters' component={MountainCoffeeRoastersDetails} />
            <Route exact path= '/explore/divisions/pngcommvehic' component={PngCommercialVehiclesDetail} />
            <Route exact path='/explore/divisions/allpowerservice' component={AllPowerServiceDetail} />
            <Route exact path='/explore/divisions/jetsmart' component={JetSmartDetail} />
            <Route exact path='/explore/divisions/mototrain' component={MotoTrainingDetail}  />
            <Route exact path='/explore/divisions/pcs' component={PacificCargoService}  />
            <Route exact path='/explore/divisions/nkwbuilding' component={NkwBuildingDetail} />
            <Route exact path='/explore/divisions/hvc' component={HVCDetail} />
            <Route exact path='/explore/divisions/pngconcrete' component={Divisions} /> 
            <Route exact patch='/explore/divisions/expacau' component={ExpacDetail}/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 2300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 2600ms ease-in;
    }
    div.transition-group {
      position: relative;
    }
    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
`;

export default withRouter(Container);