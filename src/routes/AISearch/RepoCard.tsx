import Link from "next/link";
import Image from "next/image";
import type { EmbeddingSearchResult } from "../../server/router/embeddings";
import {
  Star,
} from "lucide-react";

const RepoCard = ({ repo }: { repo: EmbeddingSearchResult }) => {
    const owner = repo.full_name.split("/")[0];
    const avatar = `https://github.com/${owner}.png`;
    return (
      <Link href={`/repo-details/${repo.full_name}`}>
        <div className="flex flex-col gap-2 items-center w-64 md:w-80 h-48 p-4 bg-white shadow-lg rounded-sm">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={avatar}
              alt="repo"
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />
            <p className="text-xl text-ellipsis line-clamp-1">{repo.full_name}</p>
          </div>
          <p className="text-gray-500 text-ellipsis line-clamp-3 flex-1">
            {repo.description}
          </p>
          <div className="flex flex-row items-center">
            <Star size={20} />
            <p className="text-gray-500">{repo.stargazers_count}</p>
          </div>
        </div>
      </Link>
    );
  };

  export default RepoCard