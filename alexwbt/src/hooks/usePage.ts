import { useAppContext } from "@src/components/App";
import { useEffect } from "react";

const usePage = (title: string) => {

  const { setPageTitle } = useAppContext();

  useEffect(() => {
    setPageTitle(title);
    return () => {
      setPageTitle("");
    };
  }, [title, setPageTitle]);

};

export default usePage;
