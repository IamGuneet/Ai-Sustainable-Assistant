import { useHistory } from 'react-router-dom';

const withAuth = (WrappedComponent, redirectPath) => {
  const withAuthComponent = (props) => {
    const history = useHistory();
    const token = localStorage.getItem('token');

    useEffect(() => {
      if (!token) {
        history.push(redirectPath);
      }
    }, [token, history]);

    return token ? <WrappedComponent token={token} {...props} /> : null;
  };

  return withAuthComponent;
};

export default withAuth;