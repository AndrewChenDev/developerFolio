declare module "react-headroom" {
  import type {ComponentProps} from "react";

  interface HeadroomProps extends ComponentProps<"div"> {
    onPin?: () => void;
    onUnpin?: () => void;
    onUnfix?: () => void;
    upTolerance?: number;
    downTolerance?: number;
    disable?: boolean;
    wrapperStyle?: React.CSSProperties;
    parent?: () => HTMLElement;
    pin?: boolean;
  }

  const Headroom: React.FC<HeadroomProps>;
  export default Headroom;
}
