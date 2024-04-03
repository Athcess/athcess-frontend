import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import  AuthProvider  from "react-auth-kit/AuthProvider";
import createStore from 'react-auth-kit/createStore';
const store = createStore({
  authName:"_auth",
  authType:"cookie",
  cookieDomain: window.location.hostname,
  cookieSecure:false,
});

const queryClient = new QueryClient();

export function MainProvider({ children }) {
  return (
    <AuthProvider store={store}>
    <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
            <ReactQueryDevtools />
          </LocalizationProvider>
        </MantineProvider>
    </QueryClientProvider>
    </AuthProvider>
  );
}
