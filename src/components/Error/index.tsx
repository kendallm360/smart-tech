import { StyledError } from "../styles/Error.styled";

const Error = () => {
  return (
    <StyledError>
      <h2 data-cy="loading" className="loading">
        Loading...
      </h2>
    </StyledError>
  );
};

export default Error;
