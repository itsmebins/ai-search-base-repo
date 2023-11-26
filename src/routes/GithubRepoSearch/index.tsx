import SearchBar from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "components/UI/Loader";


const RepoSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url.includes("/search-repo")) {
        setIsLoading(true);
      }
    };

    const handleRouteComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-96 h-96 animate-bounce mx-auto">
          <Loader />
        </div>
        <p className="text-center text-xl text-primary">
          Searching for Github repos<span className="">...</span>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-neutral">
      <div className="flex w-full">
            <div className="mx-auto flex flex-col w-4/5 md:w-1/2 mb-14 md:mb-2">
              <SearchBar />
              <h3 className="text-center pt-2 text-gray-500">
                Search for a GitHub repo
              </h3>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default RepoSearch;