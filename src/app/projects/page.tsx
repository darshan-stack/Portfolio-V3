import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </Container>
      <Container className="py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Projects
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              My projects and work across different technologies and domains.
            </p>
          </div>

          <Separator />

          {/* Projects */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                All Projects
                {projects.length > 0 && (
                  <span className="text-muted-foreground ml-2 text-sm font-normal">
                    ({projects.length}{' '}
                    {projects.length === 1 ? 'project' : 'projects'})
                  </span>
                )}
              </h2>
            </div>

            <ProjectList projects={projects} />
          </div>
        </div>
      </Container>
    </>
  );
}
