import { Button, Form } from 'react-bootstrap';
import './App.css'


function App() {
  return (
    <div className="App">
         
      <div className="a">
     
        <div className='c'>
        <h1 className='heading '>Sign in</h1>
          <Form className='d'>
          <Form.Group className="mb-3 deco " controlId="formBasicName" >
          
              <Form.Control type="text" className='sinput' placeholder="Your name"  />

            </Form.Group>
            <Form.Group className="mb-3 deco " controlId="formBasicEmail">
              
              <Form.Control type="email" className='sinput' placeholder="Your email" />

            </Form.Group>
           

            <Form.Group className="mb-3 deco" controlId="formBasicPassword">
             
              <Form.Control type="password" className='sinput' placeholder="Your password" />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree all statements in Terms and Services" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </div>
        <div className='i'> 
        <img src='signup-image.jpg' alt='sign' />
        </div>
      </div>

    </div>
  );
}

export default App;
