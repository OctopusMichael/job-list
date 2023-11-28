import Card from "./Card";
import TagContainer from "./TagContainer";
import { useJobList } from "../hooks/useLogic";
import { AnimatePresence } from "framer-motion";

const ListOfcard = () => {
  const { tagsList, setTagsList, jobList } = useJobList();

  return (
    
    <section className="relative container">
      <div className="py-[100px]">
        {tagsList.length !== 0 && (
          <TagContainer tagsList={tagsList} setTagsList={setTagsList} />
        )}

        <AnimatePresence >

        {jobList.map((e) => (
          <Card
          key={e.id}
          setTagsList={setTagsList}
          tagsList={tagsList}
          e={e}
          />
          ))}
          </AnimatePresence>
      </div>
    </section>
  );
};

export default ListOfcard;
