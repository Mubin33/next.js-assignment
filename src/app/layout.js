import Navbar from "@/components/Navbar";
import { AuthProvider } from "./AuthProvider"; 
import "./globals.css";
export const metadata = {
  title: "Kinde Auth",
  description: "Kinde with Next.js App Router",
};
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Footer from "@/components/Footer";

export default async function RootLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <AuthProvider>
      <html lang="en">
        
        <body>
          <Navbar user={user}/>
          {children}</body>
          <Footer/>
      </html>
    </AuthProvider>
  );
}

