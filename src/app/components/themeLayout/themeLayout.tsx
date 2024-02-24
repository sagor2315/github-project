"use client";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const ThemeProviderLayour = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default ThemeProviderLayour;
