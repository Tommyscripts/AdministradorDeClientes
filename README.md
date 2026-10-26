# Administrador de Clientes

Aplicación React + Vite para administrar clientes.  
Este proyecto funciona **100% en local**, guardando datos en `localStorage` del navegador (sin backend).

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

> Este proyecto usa **npm** (lockfile: `package-lock.json`).  
> Evita mezclar `pnpm` y `npm` en el mismo workspace para no romper `node_modules`.

## Ejecutar en desarrollo

Inicia el frontend:

```bash
npm run dev
```

## Datos locales

Los registros se guardan en `localStorage` con la clave `clientes`.
Si quieres reiniciar datos, elimina esa clave desde DevTools (Application/Storage).

## Si ya corriste `pnpm install` y falló

Limpia el estado mezclado y vuelve a instalar con npm:

```bash
rm -rf node_modules pnpm-lock.yaml pnpm-workspace.yaml
npm install
```
