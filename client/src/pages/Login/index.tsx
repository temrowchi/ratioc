import React, {useState} from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCard
} from 'mdb-react-ui-kit';
import './Login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [justifyActive, setJustifyActive] = useState('signIn');
  const navigate = useNavigate();

  const handleJustifyClick = (value: React.SetStateAction<string>) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleSignIn = (e: any) => {
    if (!email || !password) {
      e.preventDefault();
    }
    navigate('/chat');
  };

  const handleSignUp = (e: any) => {
    if (!name || !email || !password) {
      e.preventDefault();
    }
    navigate('/chat');
  };

  return (
    <MDBContainer fluid className="loginOuterContainer">
      <MDBCard className="loginInnerContainer text-white my-5 mx-auto" style={{padding: '30px'}}>
        <MDBTabsContent>
          <h2 className="heading fw-bold mb-2 text-uppercase">RATIOC</h2>
          <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('signIn')} active={justifyActive === 'signIn'}>
                {'Sign in'}
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('signUp')} active={justifyActive === 'signUp'}>
                {'Sign Up'}
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBTabsPane show={justifyActive === 'signIn'}>
            <form onSubmit={handleSignIn}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email Address"
                id="form1"
                contrast
                value={email}
                size="lg"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                contrast
                id="form2"
                size="lg"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />

              <MDBBtn className="mb-4 w-100">{'Sign in'}</MDBBtn>
            </form>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'signUp'}>
            <form onSubmit={handleSignUp}>
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="form1"
                contrast
                size="lg"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email Address"
                id="form1"
                contrast
                size="lg"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                contrast
                size="lg"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <MDBBtn className="mb-4 w-100">{'Sign up'}</MDBBtn>
            </form>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
