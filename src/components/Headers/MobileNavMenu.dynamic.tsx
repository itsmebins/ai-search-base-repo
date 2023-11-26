// LoginModalDynamic.dynamic.tsx
import dynamic from "next/dynamic";

const MobileNavMenuDynamic = dynamic(() => import("./MobileNavMenu"), {
  loading: () => <p>Loading...</p>,
});

export default MobileNavMenuDynamic;
