import SingleBook from "./SingleBook";
import { Col, Container, Row , Form} from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from "react";

const BookList = (props) => {

    const [state, setState] = useState({
        searchQuery: '',
        selectedBook: null
    })

    const handleChange = (e) => {
        console.log("searching for a book in input")
        setState({searchQuery: e.target.value})
    }
  
        return (
            <Container className="m-auto p-0">
                <Row>
                    <Col md={8} className="pr-5">
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Insert a name of the book you want to search for..." 
                                    value={state.searchQuery}
                                    onChange= {handleChange}
                                    />
                                </Form.Group>
                            </Col>    
                        </Row>
                <Row className="mb-5">
                    {props.books.filter(BOOK => BOOK.title.toLowerCase().includes(state.searchQuery)).map(BOOK => (
                    <Col xs={3} key={BOOK.asin}>
                    <SingleBook book={BOOK}
                        selectedBook={ state.selectedBook} 
                        changeSelectedBook={asin => console.log("click on book", setState({
                            selectedBook: asin  
                        }))
                    } 
                        />
                    </Col>
                    ))}
                </Row>
                </Col>
                <Col md={4} className="pl-5">
                            <CommentArea asin={state.selectedBook} />
                </Col>
                </Row>
            </Container>
        )
}

export default BookList