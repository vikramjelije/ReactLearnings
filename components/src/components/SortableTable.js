import { useState } from "react";
import Table from "./Table";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

function SortableTable({ ...props }) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;
  const handleClick = (label) => {
    if(sortBy && label !== sortBy) {
        setSortBy(label);
        setSortOrder('asc');
        return;
    }
    if (sortOrder == null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find(col => col.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  const getIcons = (label, sortBy, sortOrder) => {
    if(label !== sortBy) {
        return <div>
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
        </div>;
    }
    if(sortOrder === null) {
        return <div>
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
        </div>;
    }
    else if(sortOrder === 'asc') {
        return <div>
            <IoMdArrowDropup />
        </div>;
    }
    else {
        return <div>
            <IoMdArrowDropdown />
        </div>;
    }
  }

  const updatedConfig = config.map((col) => {
    if (col.sortValue) {
      return {
        ...col,
        header: () => (
          <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(col.label)}>
            <div className="flex items-center">
            {getIcons(col.label, sortBy, sortOrder)}
                {col.label}
            </div>
          </th>
        ),
      };
    } else {
      return col;
    }
  });

  console.log(sortedData);
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
