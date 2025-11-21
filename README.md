# Plannin-React

Una aplicación React moderna para planificación y animación de planes PDDL basada en FF.

## Descripción

Plannin-React es una aplicación web que permite cargar, visualizar y animar planes de planificación automática en formato PDDL. La aplicación proporciona una interfaz intuitiva para trabajar con problemas de planificación clásicos y está basada en el planificador FF (Fast Forward).

## Características

- 📝 Carga de archivos PDDL (dominio y problema)
- 🎯 Visualización de planes generados
- 🎬 Animación de la ejecución de planes
- 🎨 Interfaz moderna y responsive
- 🔧 Integración con planificadores PDDL basados en FF

## Tecnologías

- **Frontend**: React 18, Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Parser PDDL**: JavaScript/TypeScript
- **Planificador**: Basado en FF (Fast Forward)

## Desarrollador

**Francisco Javier Gómez Rodríguez**

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/lalax-systems/Plannin-React.git
cd Plannin-React

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## Uso

1. Abre la aplicación en tu navegador
2. Carga los archivos de dominio y problema PDDL
3. Genera o carga un plan utilizando el motor FF
4. Visualiza y anima la ejecución del plan

## Estructura del Proyecto

```
Plannin-React/
├── src/
│   ├── components/     # Componentes React
│   ├── pddl/          # Parser y utilidades PDDL
│   ├── animations/    # Lógica de animación
│   ├── ff/           # Integración con FF
│   └── utils/         # Utilidades generales
├── public/            # Archivos estáticos
└── docs/              # Documentación
```

## Basado en FF

Este proyecto utiliza algoritmos y conceptos del planificador FF (Fast Forward), un planificador de planificación automática que utiliza técnicas de búsqueda heurística para resolver problemas PDDL de manera eficiente.

## Contribución

Las contribuciones son bienvenidas. Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para más detalles.

## Contacto

- **Desarrollador**: Francisco Javier Gómez Rodríguez
- Repositorio: [https://github.com/lalax-systems/Plannin-React](https://github.com/lalax-systems/Plannin-React)
- Issues: [https://github.com/lalax-systems/Plannin-React/issues](https://github.com/lalax-systems/Plannin-React/issues)