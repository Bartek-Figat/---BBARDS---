import { useSelector, useDispatch } from "react-redux";
import { selectConfigSlice } from "../slice/collapsed";
import { setCollapsed } from "../slice/collapsed";

export const useCollapsed = () => {
  const { collapsed } = useSelector(selectConfigSlice);
  const dispatch = useDispatch();

  selectConfigSlice;

  const handleToggle = () => {
    dispatch(
      setCollapsed({
        collapsed: !collapsed,
      })
    );
  };

  return [handleToggle, collapsed] as const;
};
