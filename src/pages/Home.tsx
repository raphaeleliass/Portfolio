import Header from "@/components/Header/header";
import { Section } from "@/components/sections/customSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Description from "@/components/ui/description";
import Tag from "@/components/ui/tag";
import Title from "@/components/ui/title";
import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface TechnologiesData {
  id: string;
  title: string;
  desc: string;
}

interface Tag {
  id: string;
  name: string;
}

interface ProjectsData {
  id: string;
  title: string;
  desc: string;
  path_image: string;
  url: string;
  repo: string;
  tags: Tag[];
}

function Home() {
  const [technologies, setTechnologies] = useState<TechnologiesData[]>([]);
  const [projects, setProjects] = useState<ProjectsData[]>([]);

  useEffect(() => {
    async function getTech() {
      try {
        const techResponse = await getDocs(collection(db, "tecnologies"));
        const techData = techResponse.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as TechnologiesData,
        );
        setTechnologies(techData);
      } catch (err) {
        console.log(err);
      }
    }
    getTech();
  }, []);

  useEffect(() => {
    async function getProjects() {
      try {
        const projectsResponse = await getDocs(collection(db, "projects"));
        const projectData = projectsResponse.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            desc: data.desc,
            path_image: data.path_image,
            url: data.url,
            repo: data.repo,
            tags: Array.isArray(data.tags)
              ? data.tags.map((tag, index) => ({
                  id: index.toString(),
                  name: tag,
                }))
              : [],
          } as ProjectsData;
        });
        setProjects(projectData);
      } catch (err) {
        console.log(err);
      }
    }
    getProjects();
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl">
        <Section className="flex flex-col-reverse gap-y-12 md:flex-row">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <Title>Olá,</Title>
            <Title className="md:text-left">
              Que tal tirar os planos dos papéis?
            </Title>
            <Description className="text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              deserunt eius, ea laborum possimus accusamus in molestias
              voluptatem architecto id, laboriosam enim adipisci tempore! Dicta
              blanditiis rem maiores iusto consequuntur.
            </Description>

            <span className="flex justify-center space-x-2 md:justify-start">
              <Button className="space-x-1">
                <FaLinkedin />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/raphaeleliass"
                >
                  Linkedin
                </a>
              </Button>
              <Button className="space-x-1" variant={"secondary"}>
                <FaGithub />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/raphaeleliass"
                >
                  Github
                </a>
              </Button>
            </span>
          </div>

          <div className="flex justify-center md:w-1/2">
            <div className="h-full w-full rounded-xl bg-black"></div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 place-items-center gap-12 md:grid-cols-3">
            {technologies.map((tech) => (
              <div className="space-y-2" key={tech.id}>
                <Title className="flex flex-col text-4xl">{tech.title}</Title>
                <Description>{tech.desc}</Description>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <Title>Projetos</Title>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between">
                <CardHeader>
                  <img
                    src={project.path_image}
                    alt={`Projeto ${project.title}`}
                    className="rounded-md shadow-lg ring-1 ring-neutral-200"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>

                  <CardDescription>{project.desc}</CardDescription>

                  <span className="flex flex-row gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag.id}>{tag.name}</Tag>
                    ))}
                  </span>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button>
                    <a target="_blank" rel="noreferrer" href={project.repo}>
                      Repositório
                    </a>
                  </Button>
                  <Button variant={"secondary"}>
                    <a target="_blank" rel="noreferrer" href={project.url}>
                      Website
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default Home;
