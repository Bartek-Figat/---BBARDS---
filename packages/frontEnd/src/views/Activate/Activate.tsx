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
    async function fetchData() {
      try {
        if (token) {
          dispatch(confirmEmail({ token }));
          navigate("/login");
        }
      } catch (err) {
        navigate("/login");
      }
    }
    fetchData();
  }, [dispatch, navigate, token]);

  return <div className="flex justify-center items-center mt-20">...</div>;
};
