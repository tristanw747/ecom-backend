import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} alt="profile-picture" className="w-6 h-6 pic-profile" referrerPolicy="no-referrer" />
        <span className="px-2 profile-name">
          {session?.user?.name}
        </span>
      </div>
    </div>
    <div><h1>Welcome to your dashboard</h1></div>
    <div><img alt="landing-picture" className="landing-pic"
    src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></div>
  </Layout>
}
