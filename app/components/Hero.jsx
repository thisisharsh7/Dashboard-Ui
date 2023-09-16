import Banner from "../layouts/Banner";
import Progress from "../layouts/InProgress";
import AddCard from "../layouts/AddCard";
import List from "../layouts/List";

export default function Hero() {
  return (
    <div className="flex-1 bg-[#0D0B21] sm:px-[50px] px-[16px] py-[30px] flex flex-col items-center">
      <Banner />
      <div className='flex justify-between gap-[30px] 3xl:max-w-full 2xl:max-w-[1074px] xl:max-w-[1058px]  md:max-w-[683px] max-w-[290px]   [&::-webkit-scrollbar]:hidden  overflow-scroll'>
        <List heading="To-Do List (24)" NoOfCards={3} />
        <Progress heading="In Progress (2)" NoOfCards={2} />
        <List heading="Done (3)" NoOfCards={3} />
        <AddCard heading="Revised (0)" NoOfCards={0} />
      </div>
    </div>
  );
}
