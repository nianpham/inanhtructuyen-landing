import { HELPER } from "@/utils/helper";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  tag: string;
  author: string;
  thumbnail: string;
  created_at: string;
  excerpt: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="w-full lg:px-3 flex-shrink-0">
      <article className="bg-white rounded-lg overflow-hidden duration-300 group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={post.thumbnail}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="py-5">
          <div className="flex items-center space-x-2 text-sm text-[rgb(var(--fifteenth-rgb))] mb-3">
            <span className="font-medium">{post.author}</span>
            <span className="text-gray-400">•</span>
            <span>{HELPER.formatDate(post.created_at)}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors">
            <Link href={`/blog/${post.title}`}>{post.title}</Link>
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.title}`}
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors group"
          >
            <span>Xem thêm</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
