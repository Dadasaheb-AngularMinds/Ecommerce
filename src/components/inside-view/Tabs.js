import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import Table from "./Table";
import Review from "./Review";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const [tabs, setTabs] = React.useState([
    { name: "Additional Information", href: "#", current: true },
    { name: "Reviews", href: "#", current: false },
  ]);

  const handleTabClick = (clickedTabIndex) => {
    const updatedTabs = tabs.map((tab, index) => {
      if (index === clickedTabIndex) {
        return { ...tab, current: true };
      } else {
        return { ...tab, current: false };
      }
    });

    setTabs(updatedTabs);
  };

  return (
    <div>
      {/* desktop view */}
      <div className="">
        <div className="border-b border-gray-200">
          <nav
            className="flex justify-center -mb-px space-x-8"
            aria-label="Tabs"
          >
            {tabs.map((tab, index) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => handleTabClick(index)}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
          {/* Tab Content */}
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={classNames(
                tab.current ? "block" : "hidden",
                "px-4 py-2 mt-4"
              )}
            >
              {tab.name === "Additional Information" && <Table />}
              {tab.name === "Reviews" && <Review />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
