import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useActivateQuery } from "../../api/services/api";
import { selectActivate } from "../../slice/activate";
import { ButtonLink } from "components/buttons/ButtonLink";

export const Activate = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { isSuccess, isError, isLoading } = useActivateQuery({ token });
  const { errorMessage } = useSelector(selectActivate);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex justify-center items-center mt-20">
      {isLoading && <p>Loading ...</p>}
      {isSuccess && <p>Success! Redirect to login page</p>}
      {isError && (
        <div className="flex justify-center items-center flex-col gap-5">
          <p>{errorMessage}</p>
          <ButtonLink to="/login" variant="primary">
            Back to login page
          </ButtonLink>
        </div>
      )}
    </div>
  );
};
