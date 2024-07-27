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
        <Section className="flex flex-col-reverse items-center justify-center gap-y-12 md:flex-row">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <Title className="text-4xl">Olá,</Title>
            <Title className="md:text-left">
              Que tal dar vida aos seus projetos?
            </Title>
            <Description className="text-center md:w-[460px] md:text-left">
              Sou Raphael Elias, desenvolvedor Front-End apaixonado por
              tecnologia e inovação. Minha missão é transformar ideias em
              experiências únicas. Com uma abordagem focada em design intuitivo,
              responsividade e código eficiente, estou aqui para elevar seus
              projetos ao próximo nível. Vamos criar algo espetacular juntos?
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
              <Button className="space-x-1" variant={"outline"}>
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

          <div className="flex md:w-1/2 md:justify-end">
            <div className="rounded-full border-2 border-neutral-300 p-1">
              <span className="flex rounded-full bg-gradient-to-t from-slate-500 to-neutral-900">
                <img
                  src="./profile.webp"
                  alt="Foto perfil de Raphael Elias"
                  className="h-72 w-72 translate-y-2 rounded-full object-cover object-center drop-shadow-2xl lg:h-[400px] lg:w-[400px]"
                />
              </span>
            </div>
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
