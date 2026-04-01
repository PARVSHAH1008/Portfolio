import { lazy, Suspense, useEffect } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider, useLoading } from "./context/LoadingProvider";
import { setProgress } from "./components/Loading";

const LoadingAutoCompleter = () => {
  const { setLoading } = useLoading();
  
  useEffect(() => {
    const { loaded } = setProgress(setLoading);
    // Automatically trigger loaded since there's no heavy 3D character to wait for anymore
    loaded();
  }, [setLoading]);

  return null;
};

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <LoadingAutoCompleter />
          <MainContainer>
            {/* 3D Character Removed for Finance Aesthetic */}
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
