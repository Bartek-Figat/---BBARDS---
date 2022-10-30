import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { confirmEmail } from "slice/activate";
import { ButtonLink } from "components/buttons/ButtonLink";

export const Activate = () => {
  const isError = useAppSelector((state) => state.activate.status) === "error";
  const isPending =
    useAppSelector((state) => state.activate.status) === "pending";
  const isSuccess =
    useAppSelector((state) => state.activate.status) === "success";
  const errorMessage = useAppSelector((state) => state.activate.errorMessage);

  const dispatch = useAppDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(confirmEmail({ token }));
    }
  }, [dispatch, token]);

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
      {isPending && <p>Loading ...</p>}
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
