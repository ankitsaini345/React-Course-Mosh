import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import StarterProjectApp from "./StarterProjectApp";

const StarterProjectMain = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <StarterProjectApp />
    </QueryClientProvider>
  );
};

export default StarterProjectMain;
