import ProjectCard from "@components/ProjectCard";

const AUTHOR_NAME: string = import.meta.env.VITE_AUTHOR_NAME;
const GITHUB_URL: string = import.meta.env.VITE_GITHUB_URL;
const EMAIL: string = import.meta.env.VITE_EMAIL;
const LINKEDIN_URL: string = import.meta.env.VITE_LINKEDIN;

function App() {
  return (
    <section className="font-sans bg-gray-100 text-gray-900">
      <header className="bg-[#1e1e2f] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{AUTHOR_NAME}</h1>
        <p className="text-lg opacity-90">
          Ingeniero de software especializado en React, APIs REST y backend con
          Python/Django
        </p>
      </header>

      <nav className="flex justify-center gap-6 bg-[#4ad991] p-4 font-bold text-black">
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <section id="proyectos" className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectCard
            title="Web de análisis de video con detección de personas"
            description="Trabajo de Fin de Grado - proyecto basado 
            en Django que permite a los usuarios subir un video a través de una interfaz 
            web y recibirlo con bounding boxes que resaltan a las personas detectadas 
            en cada frame. La funcionalidad principal se basa en la detección de 
            personas, pero su arquitectura permite futuras expansiones."
            image="/TFG-preview.png"
            codeLink={GITHUB_URL + "/trackr-app"}
            techs={["Python", "Django", "HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="API de procesamiento de video con ML"
            description="Trabajo de Fin de Grado - microservicio creado con FastAPI 
            con la principal funcionalidad de recibir una URL de video alojada en AWS S3, 
            procesar el video utilizando un modelo de detección de objetos y devolver varios datos
            en formato JSON incluyendo una nueva URL de AWS del video procesado con los objetos detectados marcados visualmente."
            image="/Architectural-physical-diagram.jpg"
            codeLink={GITHUB_URL + "/trackr-api"}
            techs={["Python", "FastAPI"]}
          />
          <ProjectCard
            title="Frontend tipo Kbin"
            description="Proyecto en equipo usando Vue para el frontend y con llamadas a 
            otro backend desarrollado con Django. Página inspirada en Kbin."
            image={"/vuejs.png"}
            codeLink={GITHUB_URL + "/kbin-frontend"}
            techs={["Vue.js", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Proyecto completo (frontend + backend) tipo Kbin"
            description="Proyecto en equipo usando Django tanto para el backend como para
            el frontend inspirado en la página de Kbin."
            image="/powered-django.png"
            codeLink={GITHUB_URL + "/projecte_ASW"}
            techs={["Python", "Django", "HTML", "CSS"]}
          />
          <ProjectCard
            title="Backend de juego móvil"
            description="Backend desarrollado en grupo para aplicación de móvil"
            image="/powered-django.png"
            codeLink={GITHUB_URL + "/airmon-backend"}
            techs={["Python", "Django"]}
          />
        </div>
      </section>

      <section
        id="sobre-mi"
        className="bg-gray-50 rounded-lg p-8 max-w-7xl mx-auto mt-8"
      >
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p>
          Soy ingeniero informático graduado en la UPC (especialidad en
          Ingeniería del Software). Me apasiona el desarrollo frontend y
          backend. Actualmente trabajo en proyectos personales con React, Vite y
          TypeScript. Siempre estoy en busca de nuevos desafíos y proyectos
          donde pueda aprender y crecer profesionalmente.
        </p>
      </section>

      <section
        id="contacto"
        className="bg-gray-50 rounded-lg p-8 max-w-7xl mx-auto mt-8"
      >
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p>Puedes encontrarme en mis redes o escribirme directamente:</p>
        <div className="flex gap-6 mt-4">
          <a href={GITHUB_URL} className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href={LINKEDIN_URL} className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href={"mailto:" + EMAIL} className="text-blue-600 hover:underline">
            Email
          </a>
        </div>
      </section>

      <footer className="text-center py-8 bg-[#1e1e2f] text-white mt-12">
        <p>© 2025 {AUTHOR_NAME} — Todos los derechos reservados</p>
      </footer>
    </section>
  );
}

export default App;
