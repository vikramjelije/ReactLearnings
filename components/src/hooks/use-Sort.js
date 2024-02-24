import { useState } from "react";

function useSort(config, data) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortLabel = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
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
    const { sortValue } = config.find((col) => col.label === sortBy);
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

  return {
    sortBy,
    sortOrder,
    setSortLabel,
    sortedData
  };
}

export default useSort;
