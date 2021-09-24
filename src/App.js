import PostDetails from "./PostDetails";
import {Route, Router} from "react-router";
import {Link} from "react-router-dom";
import Posts from "./Posts";

const App=() =>{
  return (
      <div>

          <Router>
              <Link to={'/posts'}>posts</Link>
              <Route exact path={'/posts'} render={()=> <Posts/>}/>
              <Route path={'/posts:id'} render={(props)=><PostDetails {...props}/>}/>
          </Router>
      </div>
  )
}

export default App;
