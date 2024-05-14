import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

const Register = observer(() => {
  return (
    <Container className="mt-4">
      <Row>
        <RegisterForm />
      </Row>
    </Container>
  );
});

export default Register;
