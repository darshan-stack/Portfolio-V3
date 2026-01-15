'use client';

import { useEffect, useState } from 'react';
import { Link } from 'next-view-transitions';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';
import { CardSpotlight } from '../ui/card-spotlight';
import { ExternalLink } from 'lucide-react';

interface MediumBlog {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string | null;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<MediumBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/medium')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />

      {loading ? (
        <div className="mt-8 text-center text-gray-500">
          Loading blogs from Medium...
        </div>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((blog, index) => (
              <CardSpotlight key={index} className="bg-black/40 dark:bg-black/60">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 hover:scale-[1.02] transition-transform duration-300"
                >
                  {blog.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white line-clamp-2 flex-1">
                      {blog.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-gray-400 mb-3">{blog.pubDate}</p>

                  <p className="text-gray-200 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-1">
                    Read on Medium
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </CardSpotlight>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <a
                href="https://medium.com/@darshanmistaridz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View all blogs on Medium
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
