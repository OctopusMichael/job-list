import { useState, useEffect } from "react";
import data from "../json/data.json";

export const useJobList = () => {
  /* tag container */
  const [tagsList, setTagsList] = useState([]);

  /* json data- */
  const [jobList, setJobList] = useState(data);

  useEffect(() => {
    if (tagsList.length != 0) {
      setJobList(
        data.filter((e) =>
          tagsList.some(
            (element) =>
              element.name === e.role ||
              element.name === e.level ||
              e.tools.includes(element.name) ||
              e.languages.includes(element.name)
          )
        )
      );
    } else {
      setJobList(data);
    }
  }, [tagsList]);

  return { tagsList, setTagsList, jobList, setJobList };
};
