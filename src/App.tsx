
import "./App.css";
import {  useDispatch, useSelector } from "react-redux";
import { RootState, } from "./app/store";
import { loadUser } from "./features/post/postSlice";

function App() {
  const postData = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();


  return (
    <div>
      {postData.error && <h1>{postData.error}</h1>}
      {postData.loading && <h1> Loading ...</h1>}
      {postData.post && (
        <div>
          <h2>{postData.post.title}</h2>
          <p>{postData.post.body}</p>
        </div>
      )}
      <button onClick={()=>dispatch(loadUser())}>loadData</button>
    </div>
  );
}

export default App;
