import { Location, useLocation } from "react-router-dom";

interface LocationState {
  from?: Location;
}

const useRedirectUrl = () => {
  const location: Location = useLocation();

  let redirectUrl = "/";

  if (location.state) {
    const { from } = location.state as LocationState;
    redirectUrl = from ? from.pathname : "/";
  }

  return { redirectUrl };
};

export default useRedirectUrl;
