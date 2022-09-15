import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"


const CommentList = (props) =>{

        return (
    <>
        <ListGroup>
            {props.commentShow.map(comment => (
                <SingleComment comments={comment} key={comment._id} 
                didDeleteComment={() => props.didDelete()} 
                />
            ))}
        </ListGroup>
    </>
    )
}

export default CommentList