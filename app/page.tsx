import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <span className="text-xl font-bold text-blue-600">TechFlow</span>
        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="#features">Características</a>
          <a href="#footer">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-blue-50">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Organiza tu trabajo con IA
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          TechFlow es la plataforma inteligente que te ayuda a gestionar tareas,
          equipos y proyectos en un solo lugar.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          Empieza gratis
        </Button>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ¿Por qué TechFlow?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>⚡ Velocidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Automatiza tareas repetitivas y ahorra horas de trabajo cada semana.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🔒 Seguridad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tus datos siempre protegidos con cifrado de extremo a extremo.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🤝 Colaboración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Trabaja en equipo en tiempo real desde cualquier dispositivo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="text-center py-8 border-t text-sm text-gray-400">
        © 2025 TechFlow. Todos los derechos reservados.
      </footer>

    </main>
  );
}