import React, { HTMLAttributes, useState } from "react";

import { AccordionItem } from "components/Accordion";

 interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The active item key.
   */
  activeItemKey?: number | string;
  /**
   * Make accordion items stay open when another item is opened
   */
  alwaysOpen?: boolean;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   */
  flush?: boolean;

  /**
   *  Data items -> List of accordian items
   */
  items?: any;

  iconType?: "plus" | "arrow";

  title?: string
}

export const AccordionList: React.FC<AccordionProps> = ({ items, iconType= "plus", title =  'FAQs'}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fgrid-c fgrid-s-xs-5 mt-6 ">
      <div className="fgrid-i fgrid-xs-12">
        <div className="mt-6 mb-6">
          <h2 className="text-3xl font-extrabold md:text-5xl lg:text-6x">
           { title }
          </h2>
        </div>
      </div>
      {items.map((item: any, index: any) => (
        <div className="fgrid-i fgrid-xs-12" key={index}>
          {" "}
          <AccordionItem
            item={item}
            ariaExpanded={index === activeIndex}
            onClick={(clickedIndex) => {
              setActiveIndex(clickedIndex === activeIndex ? -1 : index);
            }}
            index={index}
            iconType={iconType}
          />{" "}
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
