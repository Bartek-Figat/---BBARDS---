import { useSelector, useDispatch } from "react-redux";
import { selectConfigSlice, setCollapsed } from "../slice/collapsed";
import { selectCheckSlice, setCheck } from "../slice/checked";

export const useCollapsed = () => {
  const { collapsed } = useSelector(selectConfigSlice);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(
      setCollapsed({
        collapsed: !collapsed,
      })
    );
  };

  return [handleToggle, collapsed] as const;
};

export const useCheck = () => {
  const { checked } = useSelector(selectCheckSlice);
  const dispatch = useDispatch();

  selectCheckSlice;

  const handleToggle = () => {
    dispatch(
      setCheck({
        checked,
      })
    );
  };

  return [handleToggle, checked] as const;
};
