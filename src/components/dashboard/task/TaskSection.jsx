import React from "react";
import Label from "../../shared/label/Label";
import Card from "../../shared/card/Card";
import CardTitle from "../../shared/cardTitle/CardTitle";
import CardProgress from "../../shared/cardProgress/CardProgress";
import Button from "../../shared/button/Button";
import plusDark from "../../../assets/icons/PlusaddIcon.svg";



const TaskSection = ({ title, number, cardTitleProgress }) => {
  const progressList = cardTitleProgress.map((data) => (
    <section
      key={data.id}
      className={`space-y-6 sm:space-y-10 p-6 bg-white ${data.order}`}
    >
      {console.log(data.cardImage)}
      {data.cardImage ? (
        <figure
          key={data.id}
          className={`h-[16.8rem]  ${data.order} `}
        >
          <img
            src={data.cardImage}
            alt={``}
            className="w-full h-full object-cover xl:object-contain"
          />
        </figure>
      ) : null}

      <CardTitle headTitle={data.headTitle} body={data.body} />
      <CardProgress
        image1={data.image1}
        image2={data.image2}
        image3={data.image3}
        className={data.className}
        claculatedWidth={data.claculatedWidth}
        comments={data.comments}
        links={data.links}
        progress={data.progress}
      />
    </section>
  ));


 return (
   <section className="space-y-10 ">
     <Label title={title} number={number} />
     <Card className="space-y-4 overflow-y-scroll max-h-[55rem] flex flex-col rounded-xl">
       {progressList}
     </Card>
     <Button className="w-full bg-labelColor py-[1.2rem] px-[2.4rem] border-dashed border-2">
       <img src={plusDark} alt="" />
       Add task
     </Button>
   </section>
 );
};

export default TaskSection;
