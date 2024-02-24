import Table from "./Table";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import useSort from "../hooks/use-Sort";

function SortableTable({ ...props }) {
  const { config, data } = props;

  const { sortBy, sortOrder, setSortLabel, sortedData } = useSort(config, data);

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <IoMdArrowDropup />
          <IoMdArrowDropdown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <IoMdArrowDropup />
          <IoMdArrowDropdown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <IoMdArrowDropup />
        </div>
      );
    } else {
      return (
        <div>
          <IoMdArrowDropdown />
        </div>
      );
    }
  };

  const updatedConfig = config.map((col) => {
    if (col.sortValue) {
      return {
        ...col,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortLabel(col.label)}
          >
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

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
