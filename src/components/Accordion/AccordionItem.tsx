import React, { HTMLAttributes } from "react";

interface Item {
  label: string;
  desc: string;
}

interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;

  ariaExpanded?: boolean;

  item?: Item;

  index?: string | number;

  iconType?: "plus" | "arrow";

  onClick?: (event: React.MouseEvent<HTMLDivElement>, clickedIndex?: string | number) => void;
}

export const AccordionItem: React.FC<AccordionHeaderProps> = ({
  ariaExpanded = false,
  item,
  index,
  onClick,
  iconType = "arrow",
}) => 
{

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Call your custom onAccordionClick handler
    if (onClick) {
      onClick(event, index);
    }
  };

  return ( <div
    className={`collapse ${
      iconType === "plus" ? "collapse-plus" : "collapse-arrow"
    } bg-base-200`}
  >
    <input
      type="radio"
      name={`accordian_item_${index}`}
      aria-labelledby={`accordian_item_${index}`}
      checked={ariaExpanded}
    />
    <div
      className="collapse-title text-xl font-medium"
      onClick={handleClick}
      id={`accordian_item_${index}`}
    >
      {item?.label}
    </div>
    <div className="collapse-content">
      <p> {item?.desc}</p>
    </div>
  </div>)
} 
export default AccordionItem;
