import React from 'react'
import { Card } from "flowbite-react";
import Button1 from '../Button/Button1';


function CardComponent({imgSrc,title}) {
  return (
    <Card
      className="max-w-sm font-nunito "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imgSrc}
    >
      <h5 className="lg:text-2xl text-lg    whitespace-nowrap font-bold font-nunito tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Button1 text={"Link to"} />
    </Card>
  );
}

export default CardComponent