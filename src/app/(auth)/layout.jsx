import Loader from "@/components/Loader";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                <ClerkLoading>
                    <Loader/>    
                </ClerkLoading> 
                <ClerkLoaded>
                    {children}
                </ClerkLoaded>
                </body>
            </html>
        </ClerkProvider>
    );
}