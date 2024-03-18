import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

export function MainProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="">
        <MantineProvider>
          {children}
          <ReactQueryDevtools />
        </MantineProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
