import clsx from "clsx";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageWrapper = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string | string[];
}) => {
  return (
    <div
      className={clsx(
        "bg-center bg-no-repeat bg-cover h-72  rounded-lg group",
        className
      )}
    >
      {children}
    </div>
  );
};

const ImageContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string | string[];
}) => {
  return (
    <div className={clsx("flex justify-center w-full h-full", className)}>
      {children}
    </div>
  );
};

const ImageContent = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string | string[];
}) => {
  return <div className={clsx("flex items-end", className)}>{children}</div>;
};

interface ICities {
  city: string;
  ads: number;
  image: string;
  span?: string;
}

const citiesContent: ICities[] = [
  {
    city: "Los Angeles",
    ads: 25,
    image: "bg-los-angeles",
  },
  {
    city: "San Francisco",
    ads: 45,
    image: "bg-san-francisco",
  },
  {
    city: "California",
    ads: 40,
    image: "bg-california",
    span: "lg:col-span-2",
  },
  {
    city: "New York",
    ads: 40,
    image: "bg-new-york",
    span: "lg:col-span-2",
  },
  {
    city: "Manhattan",
    ads: 40,
    image: "bg-manhattan",
  },
  {
    city: "Baltimore",
    ads: 40,
    image: "bg-baltimore",
  },
];

export const CityPart = () => {
  return (
    <div className="flex justify-center w-full mt-11">
      <div className="grid gap-4 xs:grid-cols-32 sm:grid-cols-30 md:grid-cols-28 lg:grid-cols-26">
        {citiesContent.map(({ city, ads, image, span }) => {
          return (
            <ImageWrapper className={`${image} ${span}`}>
              <ImageContainer>
                <ImageContent>
                  <Link to="/" className="text-white p-4 text-lg font-medium">
                    {city}
                    <p className="text-white p-4 hidden group-hover:flex animate-bounce text-md">
                      {ads} ads
                    </p>
                  </Link>
                </ImageContent>
              </ImageContainer>
            </ImageWrapper>
          );
        })}
      </div>
    </div>
  );
};
