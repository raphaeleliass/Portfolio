import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Section,
  SectionContent,
  SectionFooter,
  SectionHeader,
} from "@/components/sections/customSection";
import Header from "@/components/Header/header";
import Title from "@/components/ui/title";
import axios from "axios";
import { useEffect, useState } from "react";
import Tag from "@/components/ui/tag";
import Footer from "@/components/Footer/footer";
import SocialButton from "@/components/ui/socialButton";
import Modal from "react-modal";

Modal.setAppElement("#root");

import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import Description from "@/components/ui/description";
import { IoMdClose } from "react-icons/io";

interface TechData {
  id: string;
  title: string;
  desc: string;
}

interface TagsData {
  id: string;
  name: string;
}

interface ProjectsData {
  id: string;
  image_path: string;
  title: string;
  desc: string;
  github_url: string;
  website_url: string;
  tag: TagsData[];
}

interface LinksData {
  id: string;
  title: string;
  url: string;
}

function Home() {
  const [techs, setTechs] = useState<TechData[]>([]);
  const [projects, setProjects] = useState<ProjectsData[]>([]);
  const [links, setLinks] = useState<LinksData[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const iconMap: { [key: string]: JSX.Element } = {
    Linkedin: <FaLinkedin className="size-8" />,
    Whatsapp: <FaWhatsapp className="size-8" />,
    Github: <FaGithub className="size-8" />,
    Instagram: <FaInstagram className="size-8" />,
  };

  useEffect(() => {
    async function getData() {
      try {
        const techsResponse = await axios.get("/src/data/techData.json");
        setTechs(techsResponse.data);

        const projectsResponse = await axios.get("/src/data/projectsData.json");
        setProjects(projectsResponse.data);

        const linksResponse = await axios.get("/src/data/linksData.json");
        setLinks(linksResponse.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="flex flex-col items-center">
      <Header />

      <div className="flex w-full max-w-xs flex-col-reverse justify-evenly md:max-w-3xl md:flex-row lg:max-w-6xl">
        <Section className="items-start text-left md:w-1/2 md:max-w-xl lg:max-w-xl">
          <SectionHeader>
            <Title className="justify-center text-4xl md:justify-start md:text-5xl">
              Olá,
            </Title>
            <Title className="text-center capitalize md:text-left">
              Que tal tornar seus planos em realidade ainda hoje?
            </Title>
          </SectionHeader>
          <SectionContent>
            <Description className="max-w-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              rem aperiam harum esse quos quia optio, cumque sit, iste
              voluptate, nobis culpa ut eum nostrum totam consequuntur.
              Provident, nobis expedita.
            </Description>
          </SectionContent>
          <SectionFooter className="mx-auto flex-row space-x-1 space-y-0 md:mx-0">
            <Button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/raphaeleliass"
              >
                Linkedin
              </a>
            </Button>
            <Button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/raphaeleliass"
              >
                Github
              </a>
            </Button>
          </SectionFooter>
        </Section>

        <div className="flex h-96 w-full max-w-xs rounded-full bg-black md:w-1/2"></div>
      </div>

      <Section className="place-items-center gap-y-4 md:grid md:grid-cols-3 md:space-y-0">
        {techs.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </div>
        ))}
      </Section>

      <Section>
        <SectionHeader>
          <Title>Projetos</Title>
        </SectionHeader>

        <SectionContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <img
                  src={item.image_path}
                  alt={`imagem do projeto ${item.title}`}
                  className="cursor-pointer rounded-lg shadow-xl ring-1 ring-neutral-300"
                  onClick={() => openModal(item.image_path)}
                />
              </CardHeader>
              <CardContent>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <div className="flex flex-row gap-2">
                  {item.tag.map((tags) => (
                    <Tag key={tags.id}>{tags.name}</Tag>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button>
                  <a target="_blank" rel="noreferrer" href={item.github_url}>
                    Ver repositório
                  </a>
                </Button>
                <Button>
                  <a target="_blank" rel="noreferrer" href={item.website_url}>
                    Ver site
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SectionContent>
      </Section>

      <Footer>
        <div className="flex flex-row">
          {links.map((item) => (
            <SocialButton key={item.id} href={item.url}>
              {iconMap[item.title]}
            </SocialButton>
          ))}
        </div>
      </Footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem Ampliada"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-white"
        >
          <IoMdClose className="size-6" />
        </button>
        <img
          src={selectedImage}
          alt="Imagem Ampliada"
          className="max-h-full max-w-full"
        />
      </Modal>
    </section>
  );
}

export default Home;
