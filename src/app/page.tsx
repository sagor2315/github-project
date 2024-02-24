/** @format */
"use client";
import Image from "next/image";
import SearchAndButton from "./components/SearchAndButton";
import DarkButton from "./components/darkButton";
import img from "@/assets/117823487.webp";
import Link from "next/link";
import { MdPlace } from "react-icons/md";
import { LiaLinkSolid } from "react-icons/lia";
import { BsFillBuildingsFill, BsTwitter } from "react-icons/bs";
import { useQuery } from "react-query";
import { useState } from "react";
import moment from "moment";

type Props = {};

// type userInfoType = {
//   avatar_url: string;
//   bio: string;
//   blog: string;
//   company: null | string;
//   created_at: string;
//   followers: number;
//   following: number;
//   location: string;
//   login: string;
//   name: string;
//   public_repos: number;
//   received_events_url: string;
//   repos_url: string;
//   starred_url: string;
//   twitter_username: null | string;
// };

const HomePage = (props: Props) => {
  const [userName, setUserName] = useState("sagor2315");
  const { isLoading, error, data, refetch } = useQuery("repoData", () =>
    fetch(`https://api.github.com/users/${userName}`).then((res) => res.json())
  );
  console.log("data-", data);
  console.log("userName-", userName);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center ">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  const handleUserName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold">Github</h1>
        </div>
        <div>
          <DarkButton />
        </div>
      </div>

      <section>
        <SearchAndButton
          value={userName}
          onSubmit={handleUserName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <main className=" flex flex-col w-full rounded-lg gap-5 bg-white dark:bg-slate-800 min-h-[200px] px-4 py-8">
          <section>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <Image
                  src={data?.avatar_url}
                  width={200}
                  height={200}
                  alt="imageName"
                  className="h-20 w-20 rounded-full"
                />
                <div>
                  <h1>{data?.name || "Sagor"}</h1>
                  <Link
                    target="_blank"
                    className="text-blue-500  hover:underline text-sm transition-all"
                    href={`https://github.com/${userName}/`}
                  >
                    <h1>@{data?.login}</h1>
                  </Link>
                </div>
              </div>

              <div>
                <span className="font-medium">
                  Joined {moment(data?.created_at).format("LL")}{" "}
                </span>
              </div>
            </div>
            <div className="my-5"></div>

            <h1>{data?.bio || "This profile has no bio"}</h1>
          </section>

          <section className="dark:bg-[#0F172A] bg-gray-200 rounded-lg flex justify-between text-center p-5">
            <div>
              <h1>Repos</h1>
              <h1 className="font-semibold">{data?.public_repos}</h1>
            </div>
            <div>
              <h1>Followers</h1>

              <h1 className="font-semibold">{data?.followers}</h1>
            </div>
            <div>
              <h1>Following</h1>

              <h1 className="font-semibold">{data?.following}</h1>
            </div>
          </section>

          <section>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex items-center gap-2">
                <MdPlace className="text-xl" />

                <h1>{data?.location || "Not Available"}</h1>
              </div>
              <div className="flex items-center gap-2">
                <LiaLinkSolid className="text-xl" />{" "}
                <Link
                  href={`https://github.blog`}
                  className="hover:underline"
                  target="_blank"
                >
                  <h1>https://github.blog</h1>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <BsTwitter className="text-xl" />

                <h1>@{data?.twitter_username || "github"}</h1>
              </div>
              <div className="flex items-center gap-2">
                <BsFillBuildingsFill className="text-xl" />{" "}
                <h1>Not Available</h1>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default HomePage;
