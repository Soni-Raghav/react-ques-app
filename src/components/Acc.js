import Accordion from 'react-bootstrap/Accordion';

function Acc({ id,question, answer }) {
  return (
    <Accordion defaultActiveKey={[id]} alwaysOpen>
      <Accordion.Item eventKey="`${id}`">
        <Accordion.Header>{id}.  {question}</Accordion.Header>
        <Accordion.Body>
          
         Ans.  {answer}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default Acc;