import { tw } from "@/utils/tailwindMerge";

import { Close, Star, Camera, Back, Like } from "./assets";

type IconProps<T extends React.ElementType> = Component<T> & {
  as: "close" | "star" | "camera" | "back" | "like";
  size?: number;
};

export function Icon({
  as,
  size,
  className,
  children,
  ...props
}: IconProps<"svg">) {
  switch (as) {
    case "close":
      return (
        <Close
          className={tw("", className)}
          viewBox="0 0 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        />
      );
    case "star":
      return (
        <Star
          className={tw("", className)}
          viewBox={"0 0 30 30"}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width={size || "30"}
          height={size || "30"}
          {...props}
        />
      );
    case "camera":
      return (
        <Camera
          className={tw("", className)}
          viewBox="0 0 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width={size || "30"}
          height={size || "30"}
          {...props}
        />
      );
    case "back":
      return (
        <Back
          className={tw("fill-white dark:fill-black", className)}
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        />
      );
    case "like":
      return (
        <Like
          className={tw("", className)}
          viewBox="0 0 20 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          {...props}
        />
      );
  }
}
