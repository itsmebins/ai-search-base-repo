// LoginModalDynamic.dynamic.tsx
import dynamic from "next/dynamic";

const LoginModalDynamic = dynamic(() => import("./LoginModal"), {
  loading: () => <p>Loading...</p>,
});

export default LoginModalDynamic;
