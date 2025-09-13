import ProjectCard from "@components/ProjectCard";

const authorName: string = "Daniel Cañizares Aguilar";

function App() {
  return (
    <section className="font-sans bg-gray-100 text-gray-900">
      <header className="bg-[#1e1e2f] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{authorName}</h1>
        <p className="text-lg opacity-90">
          Desarrollador Frontend | Apasionado por la web moderna
        </p>
      </header>

      <nav className="flex justify-center gap-6 bg-[#4ad991] p-4 font-bold text-black">
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <section id="proyectos" className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectCard
            title="Twitter Clone"
            description="Proyecto en equipo usando Vue, inspirado en Twitter."
            image="https://via.placeholder.com/400x200"
            codeLink="#"
            demoLink="#"
          />
          <ProjectCard
            title="Web de análisis de video"
            description="TFG: carga y detección de personas en vídeo usando YOLO."
            image="https://via.placeholder.com/400x200"
            codeLink="#"
            demoLink="#"
          />
        </div>
      </section>

      <section
        id="sobre-mi"
        className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto mt-8"
      >
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p>
          Soy ingeniero informático graduado en la UPC (especialidad en
          Ingeniería del Software). Me apasiona el desarrollo frontend y
          actualmente trabajo con React, Vite y TypeScript. Siempre estoy en
          busca de nuevos desafíos y proyectos donde pueda aprender y crecer
          profesionalmente.
        </p>
      </section>

      <section
        id="contacto"
        className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto mt-8"
      >
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p>Puedes encontrarme en mis redes o escribirme directamente:</p>
        <div className="flex gap-6 mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a
            href="mailto:tucorreo@example.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>
        </div>
      </section>

      <footer className="text-center py-8 bg-[#1e1e2f] text-white mt-12">
        <p>© 2025 {authorName} — Todos los derechos reservados</p>
      </footer>
    </section>
  );
}

export default App;
