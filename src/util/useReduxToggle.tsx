import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCollapsed } from "../slice/collapsed";

export const useCollapsed = () => {
  const collapsed: boolean = useAppSelector((state) => state.config.collapsed);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(
      setCollapsed({
        collapsed: !collapsed,
      })
    );
  };

  const handleToggleOff = () => {
    dispatch(
      setCollapsed({
        collapsed: false,
      })
    );
  };

  const handleToggleOn = () => {
    dispatch(
      setCollapsed({
        collapsed: true,
      })
    );
  };

  return [handleToggle, handleToggleOff, handleToggleOn, collapsed] as const;
};
