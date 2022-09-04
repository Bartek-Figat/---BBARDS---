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

  return [handleToggle, collapsed] as const;
};
