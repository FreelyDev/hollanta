import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';

import ScrollToTop from 'utils/scrollToTop';

import Submit from 'containers/Submit';
import Staking from 'containers/NFTStaking';
import Mint from 'containers/NFTMint';
import ProductDetail from 'containers/ProductDetail';
import DreamCast from 'containers/DreamCast';
import Voting from 'containers/Voting';
import Home from 'containers/Home';
import CreateProject from 'containers/CreateProject';

const Routes = () => (
  <>
    <Switch>
      <Layout>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/voting" component={Voting} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/dream_cast" component={DreamCast} />
        <Route exact path="/create_project" component={CreateProject} />
        <Route exact path="/staking" component={Staking} />
        <Route exact path="/nft" component={Mint} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Layout>
    </Switch>
  </>
);

export default Routes;
