import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const queryClient = new QueryClient();

export function MainProvider({ children }) {
  return (
    
    <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
            <ReactQueryDevtools />
          </LocalizationProvider>
        </MantineProvider>
    </QueryClientProvider>

  );
}
