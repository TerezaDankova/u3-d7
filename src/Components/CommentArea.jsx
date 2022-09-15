
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from '../Components2/Loading'
import Error from '../Components2/Error'
import { useState } from "react";


const CommentArea = (props) => {

    const [state, setState] = useState({
        comments: [],
        isLoading: false,
        isError: false
       }
    )

    // useEffect(() => {
    //     fetchComments();
    //     console.log("Component hook")
    // },);

 
    const fetchComments = async () => {
        setState({
            isLoading: true
        })
        try { 
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.asin, {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YTZiMzFlYjc2ZDAwMTUxNTAyNDgiLCJpYXQiOjE2NjI2MzU5NTUsImV4cCI6MTY2Mzg0NTU1NX0.Sxfd0UiSLfePsqw61xi9cF1H4BolbnnnXU9ZIOmNft0'
            }})
            console.log(response)
        if (response.ok){
            const comments = await response.json();
            console.log(comments)
            setState({comments: comments , isLoading:false, isError: false})
        }
        else {
            console.log('error')
            setState({ isLoading:false , isError: true})
        }}
        catch(error){ console.log(error) 
            setState({ isLoading:false , isError: true})
        }
    }
  
        return (
        <>
            {state.isLoading && <Loading />}
            {state.isError && <Error />}
            <AddComment asin={props.asin} didAddComment={() => fetchComments()} />
            <CommentList commentShow={state.comments} didDelete={() => fetchComments()}/>
        </>
        )
}

export default CommentArea