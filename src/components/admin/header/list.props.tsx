import { clsx } from "clsx";

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | string[];
}) => {
  return (
    <div
      className={clsx(
        "flex justify-center flex-wrap  mt-8 w-full p-4",
        className
      )}
    >
      {children}
    </div>
  );
};
export const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | string[];
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-y-12 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | string[];
}) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center rounded-lg h-[10rem] w-[100%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | string[];
}) => {
  return (
    <div className={clsx("flex flex-col items-center w-[20rem]", className)}>
      {children}
    </div>
  );
};
