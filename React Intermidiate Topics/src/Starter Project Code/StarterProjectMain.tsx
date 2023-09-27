import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import CommentList from "./react-query/CommentList";
import MasterDetail from "./react-query/MasterDetail";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";

const StarterProjectMain = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <MasterDetail />
    </QueryClientProvider>
  );
};

export default StarterProjectMain;
