import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useCabins() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("discount") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "discount", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    isLoading,
    data: { data: cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ["cabins", filter, sortBy, page],
    queryFn: () => getCabins({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getCabins({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getCabins({ filter, sortBy, page: page - 1 }),
    });
  }

  return {
    isLoading,
    cabins,
    count,
    error,
  };
}
