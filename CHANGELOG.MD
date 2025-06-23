# Changelog

## [0.0.4] (2025-06-23)

### Refact
- Migración de estilos de Reactstrap a Tailwind CSS.

## [0.0.3] (2025-06-18)

### Features
- Se implementó el cambio de cuenta activa llamando a `POST /users/me/switch-account`.  
- Al seleccionar una cuenta, el menú de cuentas se cierra automáticamente.  
- Se mejoró el componente de perfil para reflejar la cuenta activa de forma optimista.

## [0.0.2] (2025-06-17)

### Features
- Se implementaron componentes de gestión y visualización de perfiles de usuario.
- Se agregó página DeliveryDetailsPage y componentes relacionados.
- Se implementaron modales de entrega y se mejoraron las acciones de entrega.
- Se mejoraron los componentes de entrega con nuevos colores de estado e integración de tabla de datos.
- Se creó estructura de carpetas para entregas.

### Refact
- Se refactorizó el diseño de DeliveryDetailsPage y se mejoró el estilo.
- Se ajustó el estilo de la caja de marca de la barra de navegación y se limpió la lógica del menú lateral.
- Se refactorizó la estructura de la barra lateral y se integraron los elementos del menú.

### Fix
- Se actualizó la configuración de prettier y las reglas de ESLint.

---
